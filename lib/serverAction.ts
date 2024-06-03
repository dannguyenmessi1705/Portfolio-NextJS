"use server";
import { signIn } from "./auth";

export async function signInAction() {
  return signIn("github", { redirectTo: "/" });
}

export async function sendEmailAction(data: any) {
  try {
    await fetch(
      `${process.env.NEXT_BACKEND_URL}/users/send-email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
  } catch (error) {
    throw new Error("Failed to send email");
  }
}
