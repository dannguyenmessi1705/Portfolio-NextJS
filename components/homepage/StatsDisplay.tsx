import { getCurrentStreaks } from "@/lib/github";
import Stats from "./Stats";

export default async function StatsDisplay({
  numProjects,
}: {
  numProjects: number;
}) {
  const { codeCommits, currentStreaks } = await getCurrentStreaks();
  return (
    <Stats
      codeCommits={codeCommits}
      currentStreaks={currentStreaks}
      numProjects={numProjects}
    />
  );
}
