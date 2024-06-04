"use server";
import { signIn } from "./auth";

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

export async function createProjectAction(data: any) {
  if (!process.env.SECRET_PASSWORD) throw new Error("Not authorized");
  
  try {
    await fetch(`${process.env.NEXT_BACKEND_URL}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: process.env.SECRET_PASSWORD!,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error("Failed to create project");
  }
}
