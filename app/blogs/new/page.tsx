"use client";

import { useState } from "react";
import Markdown from "react-markdown";
import { CodeBlock, Pre } from "@/components/blog/new/Code";
import Header from "@/components/blog/new/Header";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";

export default function Page() {
  const [source, setSource] = useState("");
  const options = { code: CodeBlock, pre: Pre };

  const feedElement = (syntax: string) => {
    return setSource(source + syntax);
  };
  return (
    <>
      <Header feedElement={feedElement} />
      <div className="flex h-screen justify-between">
        <section className="ư-full h-full pt-5">
          <textarea
            className="... w-full placeholder:opacity-80"
            placeholder="Feed me some Markdown 🍕"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            autoFocus
          />
        </section>
        <div className="border-das fixed" />
        <article className="w-full pl-6 pt-5">
          <Markdown
            className="prose prose-invert mx-auto w-3/4 lg:prose-xl"
            components={options}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSanitize,
              [rehypeExternalLinks, { content: { type: "text", value: "🔗" } }],
            ]}
          >
            {source}
          </Markdown>
        </article>
      </div>
    </>
  );
}
