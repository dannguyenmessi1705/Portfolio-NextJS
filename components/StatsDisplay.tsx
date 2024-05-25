import { getCurrentStreaks } from "@/api/github";
import Stats from "./Stats";

export default async function StatsDisplay() {
  const { codeCommits, currentStreaks } = await getCurrentStreaks();
  return <Stats codeCommits={codeCommits} currentStreaks={currentStreaks} />;
}
