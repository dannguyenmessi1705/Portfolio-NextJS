import { NextRequest, NextResponse } from "next/server";
import { PER_PAGE, getRandomUUID } from "@/lib/utils";
import prisma from "@/lib/prisma";
import { date } from "zod";
export const dynamic = "force-dynamic";
export async function GET(req: NextRequest) {
  let blogs = null;
  blogs = await prisma.blog.findMany({
    orderBy: { date: "desc" },
  });

  const transformedBlogs = blogs.map((blog) => {
    return {
      id: blog.id,
      date: blog.date,
    };
  });
  return NextResponse.json(transformedBlogs);
}
