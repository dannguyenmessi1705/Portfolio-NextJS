import { type Project } from "@/lib/data";

export default function Languages({ project }: { project: Project }) {
  return (
    <ul className="flex gap-4">
      {project.languages.map((lang, index) => {
        return (
          <li className="text-xl text-accent-600" key={index}>
            {lang}
            {index !== project.languages.length - 1 && ","}
          </li>
        );
      })}
    </ul>
  );
}
