"use server";
import { signIn } from "./auth";
import axios from "axios";

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
        Authorization: process.env.SECRET_PASSWORD!,
      },
    },
  );
  const res = await result.data;
  return res;
}
