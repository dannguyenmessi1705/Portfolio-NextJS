import AllProject from "@/components/project/all/AllProject";
import { getProjectsAction } from "@/lib/serverAction";

async function getData(page: number = 0) {
  const data = await getProjectsAction(page);
  return data;
}

export default async function page() {
  const projects = await getData();
  return <AllProject projects={projects} />;
}
