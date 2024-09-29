type Stats = {
  longestStreak: number;
  codeCommits: number;
  currentStreaks: number;
};

export async function getCurrentStreaks(): Promise<Stats> {
  let stats: Stats = {
    longestStreak: 0,
    codeCommits: 0,
    currentStreaks: 0,
  };
  try {
    const data = await fetch(
      `${process.env.GITHUB_CURRENT_STREAK}/${process.env.GITHUB_USERNAME}` as string,
      { cache: "no-store" },
    );
    const res = await data.json();
    stats.longestStreak = res.longestStreak.days;
    stats.codeCommits = res.totalContributions;
    stats.currentStreaks = res.currentStreak.days;
  } catch (error) {
    stats.longestStreak = 138;
    stats.codeCommits = 0;
    stats.currentStreaks = 0;
  }
  return stats;
}
