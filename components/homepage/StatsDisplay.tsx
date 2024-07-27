import { getCurrentStreaks } from "@/lib/github";
import { getNumberProjectsAction, getNumberBlogsAction } from "@/lib/serverAction";
import Stats from "./Stats";

export default async function StatsDisplay() {
  const { longestStreak } = await getCurrentStreaks();
  const numProjects = await getNumberProjectsAction();
  const numBlogs = await getNumberBlogsAction();
  return (
    <Stats
      numBlogs={numBlogs}
      longestStreak={longestStreak}
      numProjects={numProjects}
    />
  );
}
