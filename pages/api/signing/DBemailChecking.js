import { PrismaClient } from "@prisma/client";

export default async function handler(req, res){
    if (req.method === 'GET') return res.send('api route')
    let reqBody = JSON.parse(req.body)
    
    const prisma = new PrismaClient()

    let emailresults = await prisma.user.count({where: { email: reqBody.email }})
    let usersresults = await prisma.user.count({where: { username: reqBody.username }})

    let results = emailresults || usersresults

    console.log('res from api point: ', results, reqBody.email)
    res.json(results)

}