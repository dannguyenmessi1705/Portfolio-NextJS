import { NextRequest, NextResponse } from "next/server";
import { PER_PAGE, getRandomUUID } from "@/lib/utils";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page") ?? "0";
  const q = req.nextUrl.searchParams.get("q") ?? "";
  let blogs = null;
  if (page !== "all") {
    blogs = await prisma.blog.findMany({
      include: {
        admin: true,
      },
      skip: parseInt(page) * PER_PAGE,
      take: PER_PAGE,
      orderBy: { date: "desc" },
      where: {
        OR: [
          {
            title: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: q,
              mode: "insensitive",
            },
          },
        ],
      },
    });
  } else
    blogs = await prisma.blog.findMany({
      include: {
        admin: true,
      },
      where: {
        OR: [
          {
            title: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            content: {
              contains: q,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: { date: "desc" },
    });

  const transformedBlogs = blogs.map((blog) => {
    return {
      id: blog.id,
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      coverImage: blog.coverImage,
      date: blog.date,
      adminName: blog.admin?.name,
      adminAvatar: blog.admin?.image,
    };
  });
  return NextResponse.json(transformedBlogs);
}
