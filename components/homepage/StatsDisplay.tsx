import { getCurrentStreaks } from "@/lib/github";
import { getNumberProjectsAction, getNumberBlogsAction } from "@/lib/serverAction";
import Stats from "./Stats";

export default async function StatsDisplay() {
  const { currentStreaks } = await getCurrentStreaks();
  const numProjects = await getNumberProjectsAction();
  const numBlogs = await getNumberBlogsAction();
  return (
    <Stats
      numBlogs={numBlogs}
      currentStreaks={currentStreaks}
      numProjects={numProjects}
    />
  );
}
