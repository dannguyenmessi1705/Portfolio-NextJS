import { getProjectsAction } from "@/lib/serverAction";
import Project from "./Project";
import { Session } from "next-auth";

export default async function ProjectListCard({
  session,
}: {
  session: Session | null;
}) {
  const projects = await getProjectsAction("all");
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <Project projects={projects} session={session} />;
}
