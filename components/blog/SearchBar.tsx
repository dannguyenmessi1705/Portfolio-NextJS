"use client";
import { motion } from "framer-motion";
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
import { useTransition } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const formSchema = z.object({
  content: z.string().min(3),
});

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const handleSearch = (content: string) => {
    const newSearchParam = new URLSearchParams(searchParams);
    newSearchParam.set("q", content);
    router.replace(`${pathName}?${newSearchParam.toString()}`, {
      scroll: false,
    });
  };
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => handleSearch(values.content));
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-4 md:flex md:justify-end"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => {
            return (
              <FormItem className="md:mr-4 md:w-1/3">
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Search"
                    {...field}
                    className="w-full rounded-full border bg-primary-100 px-6 py-2 text-primary-950"
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
      </form>
    </Form>
  );
}
