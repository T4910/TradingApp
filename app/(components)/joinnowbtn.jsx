'use client'
import {useRouter} from 'next/navigation'
import { useSession } from 'next-auth/react'


export default function joinnowbtn() {
    const router = useRouter()
    const {data} = useSession()

    const forwardedURL = {
        url: data?.user ? `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard` : `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/signings/register`,
        btn: data?.user ? 'Back to Dashboard' : 'Join Now'
    } 


    return (
        <button 
        className="bg-primary p-4 px-12 m-auto rounded-md text-base font-semibold"
        onClick={() => router.replace(forwardedURL.url)}>{forwardedURL.btn}</button>
    )
}
