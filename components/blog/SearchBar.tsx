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
import { useEffect, useRef, useState, useTransition } from "react";

const formSchema = z.object({
  content: z.string().min(3),
});

export default function SearchBar() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => console.log(values));
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-4">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Search"
                    {...field}
                    className="w-full rounded border p-2"
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
