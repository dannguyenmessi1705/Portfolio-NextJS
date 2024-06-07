"use server";
import { revalidatePath } from "next/cache";
import { signIn } from "./auth";
import axios from "axios";
import { redirect } from "next/navigation";

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
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error("Failed to send email");
  }
}

export async function createProjectAction(data: FormData) {
  const result = await axios.post(
    `${process.env.NEXT_BACKEND_URL}/projects`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
  const res = await result.data;
  if (!res) throw new Error("Failed to create project");
  revalidatePath("/projects");
  revalidatePath("/projects/all");
  revalidatePath("/");
  redirect("/projects/all");
}

export async function getProjectsAction(page: number = 0) {
  try {
    const result = await axios.get(
      `${process.env.NEXT_BACKEND_URL}/projects?page=${page}`,
    );
    const res = await result.data;
    if (!res) throw new Error("Failed to fetch projects");
    return res;
  } catch (error) {
    return [];
  }
}
