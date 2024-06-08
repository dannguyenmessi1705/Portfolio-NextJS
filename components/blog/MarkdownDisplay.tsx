"use client";
import dynamic from "next/dynamic";
const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false },
);

export default function MarkdownDisplay({ value }: { value: string }) {
  return (
    <section className="">
      <Markdown source={value}/>
    </section>
  );
}
