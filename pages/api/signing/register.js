import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

export default async function handler(req, res){
  if (req.method === 'GET') return res.send({})
  const prisma = new PrismaClient()

  const user = await prisma.user.create({
    data: {
      firstName: req.body.surname,
      lastName: req.body.orignalname,
      password: await bcrypt.hash(req.body.password, 10),
      email: req.body.email
    },
  })

  res.json({user: user})
};