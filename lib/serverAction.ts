"use server";
import { revalidatePath } from "next/cache";
import { signIn, auth } from "./auth";
import axios from "axios";
import { redirect } from "next/navigation";
import prisma from "./prisma";
import { put } from "@vercel/blob";
import { type Category } from "./data";

export async function signInAction() {
  return signIn("github", { redirectTo: "/" });
}

export async function sendEmailAction(data: any) {
  try {
    await fetch(`${process.env.NEXT_BACKEND_URL}/users/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error("Failed to send email");
  }
}

export async function createProjectAction(data: FormData) {
  const session = await auth();
  if (!session || session.user?.id !== process.env.ADMIN_ID) {
    throw new Error("Unauthorized");
  }
  const title = data.get("title") as string;
  const image = data.get("image") as File;
  const category = data.get("category") as Category;
  const description = data.get("description") as string;
  const demo = data.get("demo") as string;
  const source = data.get("source") as string;
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
  const languageNames = (data.get("languages") as string).split(
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
        connect: { id: process.env.ADMIN_ID },
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
  if (!newProject) throw new Error("Failed to create project");
  revalidatePath("/projects");
  revalidatePath("/projects/all");
  revalidatePath("/");
  redirect("/projects/all");
}

export async function getProjectsAction(page: string = "0") {
  try {
    const result = await axios.get(
      `${process.env.NEXT_BACKEND_URL}/api/projects?page=${page}`,
    );
    const res = await result.data;
    if (!res) throw new Error("Failed to fetch projects");
    return res;
  } catch (error) {
    return [];
  }
}
