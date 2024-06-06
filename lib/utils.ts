import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as cryptoServer from "crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PER_PAGE = 10;

export function getRandomUUID() {
  if (typeof window === "undefined") {
    return cryptoServer.randomBytes(16).toString("hex");
  }
  return crypto.randomUUID();
}
