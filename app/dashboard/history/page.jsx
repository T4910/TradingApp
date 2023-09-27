import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

export default async function page() {
    const session = await getServerSession(authOptions)
    session && redirect('/dashboard')

    console.log('history page')
    return (
        <div>history</div>
    )
}
