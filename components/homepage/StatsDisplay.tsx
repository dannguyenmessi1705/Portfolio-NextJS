import { getCurrentStreaks } from "@/lib/github";
import { getNumberProjectsAction } from "@/lib/serverAction";
import Stats from "./Stats";

export default async function StatsDisplay() {
  const { codeCommits, currentStreaks } = await getCurrentStreaks();
  const numProjects = await getNumberProjectsAction();
  return (
    <Stats
      codeCommits={codeCommits}
      currentStreaks={currentStreaks}
      numProjects={numProjects}
    />
  );
}
