"use client";
import { motion } from "framer-motion";
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
import { useTransition } from "react";
import { sendEmailAction } from "@/lib/serverAction";
import SubmitButton from "../ui/SubmitButton";

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  phone: z.string().min(10, {
    message: "The phone number is invalid",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

export default function FormContact() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = values;
    startTransition(() => sendEmailAction(message));
    // delete all values
    form.reset();
  }

  return (
    <Form {...form}>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 rounded-xl bg-primary-900 p-8"
      >
        <h3 className="text-4xl text-accent-600">Get in touch</h3>
        <p className="text-primary-300">
          If you are interested in my information, please contact me now
        </p>

        <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  {/* <FormLabel>FirstName</FormLabel> */}
                  <FormControl className="w-full">
                    <Input placeholder="Firstname" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your first name</FormDescription> */}
                  <FormMessage className="absolute " />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  {/* <FormLabel>LastName</FormLabel> */}
                  <FormControl className="w-full">
                    <Input placeholder="LastName" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your last name</FormDescription> */}
                  <FormMessage className="absolute" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  {/* <FormLabel>Email address</FormLabel> */}
                  <FormControl className="w-full">
                    <Input placeholder="Email address" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your email address</FormDescription> */}
                  <FormMessage className="absolute" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              return (
                <FormItem className="relative mb-4">
                  {/* <FormLabel>Phone Number</FormLabel> */}
                  <FormControl className="w-full">
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your phone number</FormDescription> */}
                  <FormMessage className="absolute" />
                </FormItem>
              );
            }}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            return (
              <FormItem>
                {/* <FormLabel>Message</FormLabel> */}
                <FormControl className="relative">
                  <Textarea
                    className="h-[150px]"
                    placeholder="Please leave your message here"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>This is your message</FormDescription> */}
                <FormMessage className="absolute" />
              </FormItem>
            );
          }}
        />

        <SubmitButton pending={isPending} labelPending="Sending...">
          Send message
        </SubmitButton>
      </motion.form>
    </Form>
  );
}
