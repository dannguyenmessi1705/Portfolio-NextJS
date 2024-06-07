type Stats = {
  codeCommits: number;
  currentStreaks: number;
};

export async function getCurrentStreaks(): Promise<Stats> {
  const data = await fetch(
    `${process.env.GITHUB_CURRENT_STREAK}/${process.env.GITHUB_USERNAME}` as string,
    { cache: "no-store" }
  );
  const res = await data.json();
  return {
    codeCommits: res.totalContributions,
    currentStreaks: res.currentStreak.days,
  };
}
