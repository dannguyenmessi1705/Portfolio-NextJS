type Category = "Frontend" | "Backend" | "Fullstack";
type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  languages: { name: string }[];
  image: string;
  demo: string | null;
  source: string | null;
};
export default function AllProject() {
  return <div>AllProject</div>;
}
