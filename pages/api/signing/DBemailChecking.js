import { PrismaClient } from "@prisma/client";

export default async function handler(req, res){
    if (req.method === 'GET') return res.send('api route')
    let reqBody = JSON.parse(req.body)
    
    const prisma = new PrismaClient()

    let results = await prisma.user.count({where: {
        email: reqBody.email
    }})

    res.json(results)

}