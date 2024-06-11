import { getProjectsActionNoRoute } from "@/lib/serverAction";
import Project from "./Project";
import { Session } from "next-auth";
import { type Project as ProjectType } from "@/lib/data";

export default async function ProjectListCard({
  session,
}: {
  session: Session | null;
}) {
  const projects = await getProjectsActionNoRoute("all") as ProjectType[];
  return <Project projects={projects} session={session} />;
}
