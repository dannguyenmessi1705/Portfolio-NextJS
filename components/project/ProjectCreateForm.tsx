"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createProjectAction } from "@/lib/serverAction";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.string().min(1, {
    message: "Description is required",
  }),
  demo: z
    .string({})
    .refine(
      (data) =>
        data === "" ||
        (data.startsWith("http") && data.includes("://") && data.includes(".")),
      {
        message: "Invalid URL",
      },
    ),
  source: z.string().url({
    message: "Invalid URL",
  }),
  category: z.string().min(1, {
    message: "Category is required",
  }),
  languages: z.string().min(1, {
    message: "Language is required",
  }),
  image: z
    .any()
    .optional()
    .refine((file) => !file || file instanceof File, {
      message: "Image is required",
    }),
});

export default function ProjectCreateForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      demo: "",
      source: "",
      category: "",
      languages: "",
      image: null,
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("demo", values.demo);
    formData.append("source", values.source);
    formData.append("category", values.category);
    formData.append("languages", values.languages);
    values.image && formData.append("image", values.image!);
    await createProjectAction(formData);
    setImagePreview(null);
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
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage className="absolute " />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="demo"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  <FormControl className="w-full">
                    <Input placeholder="Link demo" {...field} />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="source"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  <FormControl className="w-full">
                    <Input placeholder="Link source" {...field} />
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  <FormControl className="w-full">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          <SelectItem value="frontend">Frontend</SelectItem>
                          <SelectItem value="backend">Backend</SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="absolute" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="languages"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  <FormControl className="w-full">
                    <Input
                      placeholder="Languages: Java, Python, ..."
                      {...field}
                    />
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
          name="description"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl className="relative">
                  <Textarea
                    className="h-[150px]"
                    placeholder="Description for project"
                    {...field}
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
