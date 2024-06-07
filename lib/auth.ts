import NextAuth, { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";
import prisma from "./prisma";

const authConfig: NextAuthConfig = {
  providers: [
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
    signOut: "/signout",
  },
  callbacks: {
    async session({ session, user }) {
      const admin = await prisma.admin.findFirst({
        where: { name: session.user.name! },
      });
      admin ? (session.user.id = admin.id) : (session.user.id = "");
      return session;
    },
  },
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
