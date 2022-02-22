import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient()

prisma.user.findFirst
export default NextAuth({
  debug: true,
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
          server: {
            host: "127.0.0.1",
            auth: null,
            secure: false,
            port: 1025,
            tls: { rejectUnauthorized: false },
          },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "database"
    }
})
