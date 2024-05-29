import { getCurrentStreaks } from "@/api/github";
import Stats from "./Stats";

export default async function StatsDisplay() {
  const { codeCommits, currentStreaks } = await getCurrentStreaks();
  await new Promise((res) => setTimeout(res, 10000));
  return <Stats codeCommits={codeCommits} currentStreaks={currentStreaks} />;
}
