import NextAuth, { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";

const authConfig: NextAuthConfig = {
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  // callbacks: {

  // }
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
