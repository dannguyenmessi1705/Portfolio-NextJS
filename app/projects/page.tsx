import Project from "@/components/project/Project";
import { getProjectsAction } from "@/lib/serverAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project",
  description:
    "This is a project page of Di Dan Nguyen where you can view all the projects that I have worked on.",
};

async function getData() {
  const data = await getProjectsAction();
  return data;
}

async function Page() {
  const projects = await getData();
  console.log(projects);
  return <Project projects={projects} />;
}

export default Page;
