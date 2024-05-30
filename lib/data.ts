// stats profile
export type Stats = {
    key: string;
  count: number;
  description: string;
};
export const stats: Stats[] = [
  {
    key: "projects",
    count: 0,
    description: "Projects Completed",
  },
  {
    key: "currentStreaks",
    count: 0,
    description: "Current Streaks",
  },
  {
    key: "codeCommits",
    count: 0,
    description: "Code Commits",
  },
  {
    key: "accessings",
    count: 0,
    description: "Accessings",
  },
];