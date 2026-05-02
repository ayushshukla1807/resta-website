import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Demo auth - in production connect to real DB
        if (credentials?.email && credentials?.password) {
          return { id: "1", email: credentials.email, name: "Student" }
        }
        return null
      }
    })
  ],
  pages: { signIn: "/auth" },
  secret: process.env.NEXTAUTH_SECRET || "fallback_secret",
})

export { handler as GET, handler as POST }
