"use client";

// import dynamic from "next/dynamic";
import { useState } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";

// const MDEditor = dynamic(
//   () => import("@uiw/react-md-editor").then((mod) => mod.default),
//   { ssr: false },
// );

// const EditerMarkdown = dynamic(
//   () =>
//     import("@uiw/react-md-editor").then((mod) => {
//       return mod.default.Markdown;
//     }),
//   { ssr: false },
// );

// const Markdown = dynamic(
//   () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
//   { ssr: false },
// );

function withEvent(func: Function): React.ChangeEventHandler<any> {
  return (event: React.ChangeEvent<any>) => {
    const { target } = event;
    func(target.value);
  };
}
export default function Homepage() {
  const [value, setValue] = useState<string>("Let's write an article!");
  return (
    <div className="container mx-auto">
      <MDEditor
        value={value}
        onChange={(newValue: string = "") => setValue(newValue)}
        fullscreen={false}
        preview="edit"
        className=""
      />
    </div>
  );
}
