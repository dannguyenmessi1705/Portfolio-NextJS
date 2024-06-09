import { getProjectsAction } from "@/lib/serverAction";
import AllProject from "./AllProject";

export default async function AllProjectList() {
  const projects = await getProjectsAction("all");
  return <AllProject projects={projects} />;
}
