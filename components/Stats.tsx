"use client";
import CountUp from "react-countup";
type Stats = {
  count: number;
  description: string;
};
type Props = {
  codeCommits: number;
  currentStreaks: number;
};

export default function Stats({ codeCommits, currentStreaks }: Props) {
  const stats: Stats[] = [
    {
      count: 20,
      description: "Projects Completed",
    },
    {
      count: currentStreaks || 50,
      description: "Current Streaks",
    },
    {
      count: codeCommits || 726,
      description: "Code Commits",
    },
    {
      count: 300,
      description: "Profile views",
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={stat.count}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.description.length < 20
                      ? "max-w-[100px]"
                      : "max-w-[150px]"
                  } leading-snug text-primary-200`}
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
