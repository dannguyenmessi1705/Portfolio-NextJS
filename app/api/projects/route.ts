import { NextRequest, NextResponse } from "next/server";
import { PER_PAGE, getRandomUUID } from "@/lib/utils";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { connect } from "http2";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page") ?? "0";
  let projects = null;
  if (page !== "all") {
    projects = await prisma.project.findMany({
      skip: parseInt(page) * PER_PAGE,
      take: PER_PAGE,
    });
  } else projects = await prisma.project.findMany();
  return NextResponse.json(projects);
}


export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || session.user?.id !== process.env.ADMIN_ID) {
    return NextResponse.error();
  }

  const body = await req.json();
  const languageNames = body.languages.split(",") as string[];

  // Tìm kiếm hoặc tạo các ngôn ngữ
  const languagePromises = languageNames.map(async (lang) => {
    let language = await prisma.language.findFirst({
      where: { name: lang },
    });
    if (!language) {
      language = await prisma.language.create({
        data: { name: lang },
      });
    }
    return language;
  });

  const languages = await Promise.all(languagePromises);

  // Tìm kiếm hoặc tạo danh mục
  let category = await prisma.category.findFirst({
    where: { name: body.category },
  });
  if (!category) {
    category = await prisma.category.create({
      data: { name: body.category },
    });
  }

  // Tạo project mới
  const newProject = await prisma.project.create({
    data: {
      title: body.title,
      description: body.description,
      image: body.image || null,
      demo: body.demo || null,
      source: body.source,
      category: {
        connect: { id: category.id },
      },
      admin: {
        connect: { id: session.user?.id },
      },
      languages: {
        create: languages.map((language) => ({
          language: {
            connect: { id: language.id },
          },
        })),
      },
    },
  });

  console.log(newProject);

  return NextResponse.json({
    message: "Project created successfully",
  });
}
