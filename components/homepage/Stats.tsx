"use client";
import CountUp from "react-countup";
import { stats, type Stats } from "@/lib/data";
import { useEffect, useState } from "react";
import { useSocket } from "@/contexts/SocketProvider";
type Props = {
  codeCommits: number;
  currentStreaks: number;
};

export default function Stats({ codeCommits, currentStreaks }: Props) {
  const [profileStats, setProfileStats] = useState<Stats[]>(stats);
  const { users } = useSocket();

  useEffect(() => {
    setProfileStats((prev) => {
      prev.forEach((stat) => {
        if (stat.key === "accessings") {
          stat.count = users;
        } else if (stat.key === "codeCommits") {
          stat.count = codeCommits;
        } else if (stat.key === "currentStreaks") {
          stat.count = currentStreaks;
        }
      });
      return [...prev];
    });
  }, [users, codeCommits, currentStreaks]);

  return (
    <section>
      <div className="container mx-auto mb-4">
        <div className="mx-auto flex max-w-[80vh] flex-wrap gap-6 xl:max-w-none">
          {profileStats.map((stat, index) => {
            return (
              <div
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
                key={index}
              >
                <CountUp
                  end={stat.count}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-6xl"
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
