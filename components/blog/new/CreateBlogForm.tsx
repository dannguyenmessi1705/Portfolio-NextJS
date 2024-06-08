"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createBlogAction } from "@/lib/serverAction";
import MarkdownEdit from "./MarkdownEdit";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  excerpt: z.string().min(1, {
    message: "Description is required",
  }),
  content: z.string().min(1, {
    message: "Content is required",
  }),
  image: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof File, {
      message: "Image is required",
    }),
});

export default function CreateBlogForm() {
  const [value, setValue] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: value,
      image: null,
    },
  });

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("excerpt", values.excerpt);
    formData.append("content", values.content);
    values.image && formData.append("image", values.image!);
    await createBlogAction(formData);
    setImagePreview(null);
    setValue("");
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 rounded-xl bg-primary-900 p-8"
      >
        <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  <FormControl className="w-full">
                    <Input placeholder="Title for the blog" {...field} />
                  </FormControl>
                  <FormMessage className="absolute " />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="excerpt"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  <FormControl className="w-full">
                    <Input placeholder="Excerpt for the blog" {...field} />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field: { name, onBlur, onChange, ref, value } }) => {
              return (
                <FormItem className="relative mb-4">
                  <FormControl className="w-full">
                    <div className="flex gap-6">
                      <Button
                        type="button"
                        onClick={() => fileInputRef.current!.click()}
                      >
                        Upload Image
                        <Input
                          className="hidden"
                          type="file"
                          ref={fileInputRef}
                          name={name}
                          onBlur={onBlur}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            onChange(e.target.files?.[0]);
                            setImagePreview(
                              file ? URL.createObjectURL(file) : null,
                            );
                          }}
                        />
                      </Button>
                      {imagePreview && (
                        <>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button type="button">Preview</Button>
                            </DialogTrigger>
                            <DialogContent className="aspect-video">
                              <Image
                                src={imagePreview}
                                alt="preview"
                                fill
                                className="object-cover"
                              />
                            </DialogContent>
                          </Dialog>
                        </>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              );
            }}
          />
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl className="relative">
                  <MarkdownEdit
                    value={value}
                    setValue={setValue}
                    onChangeForm={field.onChange}
                  />
                </FormControl>
                <FormMessage className="absolute" />
              </FormItem>
            );
          }}
        />

        <Button size="sm" className="mt-6 max-w-40" type="submit">
          Create Project
        </Button>
      </form>
    </Form>
  );
}
