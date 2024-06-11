import { NextRequest, NextResponse } from "next/server";
import { PER_PAGE, getRandomUUID } from "@/lib/utils";
import prisma from "@/lib/prisma";
export const dynamic = "force-dynamic";
export async function GET(
  req: NextRequest,
  { params }: { params: { blogId: string } },
) {
  const blog = await prisma.blog.findFirst({
    include: {
      admin: true,
    },
    where: {
      id: params.blogId,
    },
  });
  const transformedBlogs = {
    id: blog?.id,
    title: blog?.title,
    excerpt: blog?.excerpt,
    content: blog?.content,
    coverImage: blog?.coverImage,
    date: blog?.date,
    adminName: blog?.admin?.name,
    adminAvatar: blog?.admin?.image,
  };
  return NextResponse.json(transformedBlogs);
}
