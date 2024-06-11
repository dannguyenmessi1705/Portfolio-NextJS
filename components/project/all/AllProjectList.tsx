import { getProjectsActionNoRoute } from "@/lib/serverAction";
import AllProject from "./AllProject";
import { type Project as ProjectType } from "@/lib/data";

export default async function AllProjectList() {
  const projects = (await getProjectsActionNoRoute("all")) as ProjectType[];
  return <AllProject projects={projects} />;
}
