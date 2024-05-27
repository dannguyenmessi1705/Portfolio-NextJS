type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  languages: { name: string }[];
  image: string;
  demo: string | null;
  source: string;
};
export default function ListProject({ project }: { project: Project }) {
  return (
    <ul className="flex gap-4">
      {project.languages.map((lang, index) => {
        return (
          <li className="text-xl text-accent-600" key={index}>
            {lang.name}
            {index !== project.languages.length - 1 && ","}
          </li>
        );
      })}
    </ul>
  );
}
