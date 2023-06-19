import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

export default async function handler(req, res){
  if (req.method === 'GET') return res.send({})
  const prisma = new PrismaClient()

  const user = await prisma.user.create({
    data: {
      firstName: req.body.surname,
      lastName: req.body.username,
      password: await bcrypt.hash(req.body.password, 10)
    },
  })

  res.json({user: user})
};