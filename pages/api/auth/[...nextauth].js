import NextAuth from "next-auth"
import {compare} from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import EmailProvider from "next-auth/providers/email";
import Crendentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"



const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.JWT_SECRET,
  session: {strategy: 'jwt'},
  pages: {
    signIn: '/signings/login',
    signOut: '/'
  },
  callbacks:{
    async redirect({url, baseUrl}){
      console.log(url, baseUrl)
      return url
    },
    async session({session, token}){
      session.user = {id: token.sub}
      return session
    }
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Crendentials({
      async authorize(credentials){
        let user = await prisma.user.findUnique({
          where: {email: credentials.email}
        })

        if(!user) return null
        let similarPassword = await compare(credentials.password, user.password)

        console.log('similar password:', similarPassword)
        let returnValue;
        similarPassword ? returnValue = {...user, password: null} : returnValue = null
        
        return returnValue
      }
    })
  ]
}

export default NextAuth(authOptions)
