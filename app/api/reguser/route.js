import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"


export async function POST(req){
  const prisma = new PrismaClient()
  const data = await req.json()

  if(data.check){
    let emailresults = await prisma.user.count({where: { email: data.email }})
    let usersresults = await prisma.user.count({where: { username: data.username }})
  
    let results = emailresults || usersresults
  
    return NextResponse.json(results)
  }


  const user = await prisma.user.create({
    data: {
      username: data.username.toLowerCase(),
      password: await hash(data.password, 10),
      email: data.email.toLowerCase()
    },
  })

  let userCreated;
  user ? userCreated = true : userCreated = false

  return NextResponse.json({userCreated: userCreated})
};

