import { NextRequest, NextResponse } from "next/server";
import { PER_PAGE, getRandomUUID } from "@/lib/utils";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { PutBlobResult, put } from "@vercel/blob";
import { type Category } from "@/lib/data";
export const dynamic = "force-dynamic"; // no need because validatePath when mutate data

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get("page") ?? "0";
  let projects = null;
  if (page !== "all") {
    projects = await prisma.project.findMany({
      skip: parseInt(page) * PER_PAGE,
      take: PER_PAGE,
      include: {
        category: true,
        languages: {
          include: { language: true },
        },
      },
      orderBy: { date: "desc" },
    });
  } else
    projects = await prisma.project.findMany({
      include: {
        category: true,
        languages: {
          include: { language: true },
        },
      },
      orderBy: { date: "desc" },
    });
  const transformedProjects = projects.map((project) => {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      demo: project.demo,
      source: project.source,
      date: project.date,
      category: project.category?.name,
      languages: project.languages.map((lang) => lang.language.name),
    };
  });
  return NextResponse.json(transformedProjects);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || session.user?.id !== process.env.NEXT_PUBLIC_ADMIN_ID) {
    return NextResponse.error();
  }
  // const body = await req.json();
  const body = await req.formData();
  const title = body.get("title") as string;
  const image = body.get("image") as File;
  const category = body.get("category") as Category;
  const description = body.get("description") as string;
  const demo = body.get("demo") as string;
  const source = body.get("source") as string;
  let imagePath: string = "";
  if (image) {
    const blob = await put(
      title!.replace(/\s/g, "") +
        "-" +
        Date.now() +
        "." +
        image.name.split(".")[1],
      image,
      {
        access: "public",
      },
    );
    imagePath = blob.url;
  }
  const languageNames = (body.get("languages") as string).split(
    ",",
  ) as string[];

  // Tìm kiếm hoặc tạo các ngôn ngữ
  const languagePromises = languageNames.map(async (lang) => {
    let language = await prisma.language.findFirst({
      where: { name: lang.trim() },
    });
    if (!language) {
      language = await prisma.language.create({
        data: { name: lang.trim() },
      });
    }
    return language;
  });

  const languages = await Promise.all(languagePromises);

  // Tìm kiếm hoặc tạo danh mục
  let categoryFind = await prisma.category.findFirst({
    where: { name: category },
  });
  if (!categoryFind) {
    categoryFind = await prisma.category.create({
      data: { name: category },
    });
  }

  // Tạo project mới
  const newProject = await prisma.project.create({
    data: {
      title: title,
      description: description,
      image: imagePath ?? null,
      demo: demo || null,
      source: source,
      category: {
        connect: { id: categoryFind.id },
      },
      admin: {
        connect: { id: process.env.NEXT_PUBLIC_ADMIN_ID },
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
  return NextResponse.json({
    message: "Project created successfully",
  });
}
