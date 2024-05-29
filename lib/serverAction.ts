"use server";
import { signIn } from "./auth";

export async function signInAction() {
  return signIn("github", { redirectTo: "/" });
}
