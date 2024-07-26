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
import { PER_PAGE } from "./utils";

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
  let image = data.get("image") as File ?? null;
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

export async function getProjectsActionNoRoute(page: string = "0") {
  let projects = [];
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
  if (!projects) return [];
  const transformedProjects = projects.map((project) => {
    return {
      id: project.id as string,
      title: project.title as string,
      description: project.description as string,
      image: project.image as string | "",
      demo: project.demo as string | null,
      source: project.source as string,
      date: project.date?.toString() as string,
      category: project.category?.name as string,
      languages: project.languages.map(
        (lang) => lang.language.name,
      ) as string[],
    };
  });
  return transformedProjects;
}

export async function createBlogAction(data: FormData) {
  const session = await auth();
  if (!session || session.user?.id !== process.env.NEXT_PUBLIC_ADMIN_ID) {
    throw new Error("Unauthorized");
  }
  const title = data.get("title") as string;
  const image = data.get("image") as File ?? null;
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
      coverImage: imagePath ?? "",
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

export async function getNumberBlogsAction(): Promise<number> {
  const numberBlogs = await prisma.blog.count();
  return numberBlogs;
}

export async function searchBlogsAction(page: string = "0", q: string) {
  try {
    const result = await axios.get(
      `${process.env.NEXT_BACKEND_URL}/api/blogs?q=${q}&page=${page}`,
    );
    const res = await result.data;
    if (!res) throw new Error("Failed to search blogs");
    return res;
  } catch (error) {
    return [];
  }
}

export async function getBlogDetailNoRoute(blogId: string) {
  const blog = await prisma.blog.findFirst({
    include: { admin: true },
    where: { id: blogId },
  });
  if (!blog) return null;
  const transformedBlogs = {
    id: blog?.id as string,
    title: blog?.title as string,
    excerpt: blog?.excerpt as string,
    content: blog?.content as string,
    coverImage: blog?.coverImage as string | "",
    date: blog?.date?.toString() as string,
    adminName: blog?.admin?.name as string,
    adminAvatar: blog?.admin?.image as string,
  };
  return transformedBlogs;
}

export async function getAllBlogsNoRoute(page: string = "0", q: string = "") {
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

  if (!blogs) return [];
  const transformedBlogs = blogs.map((blog) => {
    return {
      id: blog.id as string,
      title: blog.title as string,
      excerpt: blog.excerpt as string,
      content: blog.content as string,
      coverImage: blog.coverImage as string | "",
      date: blog.date?.toString() as string,
      adminName: blog.admin?.name as string,
      adminAvatar: blog.admin?.image as string,
    };
  });
  return transformedBlogs;
}
