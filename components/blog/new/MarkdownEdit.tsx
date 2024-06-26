"use client";
import dynamic from "next/dynamic";
const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false },
);

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
type Props = {
  value: string;
  setValue: Function;
  onChangeForm: Function;
};

export default function MarkdownEdit({ value, setValue, onChangeForm }: Props) {
  return (
    <div className="container mx-auto">
      <MDEditor
        value={value}
        onChange={(newValue: string = "") => {
          setValue(newValue);
          onChangeForm(newValue);
        }}
        fullscreen={false}
        height={250}
        preview="edit"
      />
    </div>
  );
}
