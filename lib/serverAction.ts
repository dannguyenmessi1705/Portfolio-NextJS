"use server";
import { revalidatePath } from "next/cache";
import { signIn, auth, signOut } from "./auth";
import axios from "axios";
import { redirect } from "next/navigation";
import prisma from "./prisma";
import { put } from "@vercel/blob";
import { type Category, type Mail } from "./data";
import sendEmail from "./sengrid";
import { type MailDataRequired } from "@sendgrid/mail";

export async function signInAction() {
  return signIn("github", { redirectTo: "/" });
}

export async function signOutAction() {
  return signOut({ redirectTo: "/" });
}

export async function sendEmailAction(body: Mail) {
  const mail: MailDataRequired = {
    to: process.env.SENDGRID_TO_EMAIL!,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: "YOU HAVE A NEW MESSAGE",
    templateId: process.env.SENDGRID_TEMPLATE_FORM_EMAIL!,
    dynamicTemplateData: body,
  };
  await sendEmail(mail);
}

export async function createProjectAction(data: FormData) {
  const session = await auth();
  if (!session || session.user?.id !== process.env.NEXT_PUBLIC_ADMIN_ID) {
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

export async function createBlogAction(data: FormData) {
  const session = await auth();
  if (!session || session.user?.id !== process.env.NEXT_PUBLIC_ADMIN_ID) {
    throw new Error("Unauthorized");
  }
  const title = data.get("title") as string;
  const image = data.get("image") as File;
  const excerpt = data.get("excerpt") as string;
  const content = data.get("content") as string;
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
  const newBlog = await prisma.blog.create({
    data: {
      title: title,
      excerpt: excerpt,
      content: content,
      coverImage: imagePath ?? null,
      admin: {
        connect: { id: process.env.NEXT_PUBLIC_ADMIN_ID },
      },
    },
  });

  revalidatePath("/blogs");
  revalidatePath("/");
  redirect("/blogs");
}

export async function getBlogsAction(page: string = "0") {
  try {
    const result = await axios.get(
      `${process.env.NEXT_BACKEND_URL}/api/blogs?page=${page}`,
    );
    const res = await result.data;
    if (!res) throw new Error("Failed to fetch blogs");
    return res;
  } catch (error) {
    return [];
  }
}

export async function getNumberProjectsAction() {
  const numberProjects = await prisma.project.count();
  return numberProjects;
}

export async function getBlogAction(blogId: string) {
  try {
    const result = await axios.get(
      `${process.env.NEXT_BACKEND_URL}/api/blogs/${blogId}`,
    );
    const res = await result.data;
    if (!res) throw new Error("Failed to fetch blog");
    return res;
  } catch (error) {
    return null;
  }
}
