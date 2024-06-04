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

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="frontend">Frontend</SelectItem>
          <SelectItem value="backend">Backend</SelectItem>
          <SelectItem value="others">Others</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

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
});

export default function ProjectCreateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      demo: "",
      source: "",
      category: "",
      languages: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // sendEmailAction(values);
    // delete all values
    console.log(values);
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
                      <SelectContent>
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
