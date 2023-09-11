import { PrismaClient } from "@prisma/client"
import { hash } from "bcrypt"

export default async function handler(req, res){
  if (req.method === 'GET') return res.send({})
  const prisma = new PrismaClient()

  // TODO: check if it is really lowercasing...
  // TODO: change lastName to surname and create prisma client
  console.log(req.body)
  const user = await prisma.user.create({
    data: {
      firstName: req.body.surname.toLowerCase(),
      lastName: req.body.firstname.toLowerCase(),
      password: await hash(req.body.password, 10),
      email: req.body.email.toLowerCase()
    },
  })

  console.log(user)

  let userCreated;
  user ? userCreated = true : userCreated = false

  res.json({userCreated: userCreated})
};