"use client";
import CountUp from "react-countup";
import { stats, type Stats } from "@/lib/data";
import { useEffect, useState } from "react";
import { useSocket } from "@/contexts/SocketProvider";
import { motion } from "framer-motion";
type Props = {
  longestStreak: number;
  numBlogs: number;
  numProjects: number;
};

export default function Stats({
  longestStreak,
  numBlogs,
  numProjects,
}: Props) {
  const [profileStats, setProfileStats] = useState<Stats[]>(stats);
  const { users } = useSocket();

  useEffect(() => {
    setProfileStats((prev) => {
      prev.forEach((stat) => {
        if (stat.key === "accessings") {
          stat.count = users;
        } else if (stat.key === "numBlogs") {
          stat.count = numBlogs;
        } else if (stat.key === "longestStreak") {
          stat.count = longestStreak;
        } else if (stat.key === "projects") {
          stat.count = numProjects;
        }
      });
      return [...prev];
    });
  }, [users, numBlogs, longestStreak, numProjects]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
    >
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
    </motion.section>
  );
}
