'use client'
import {useRouter} from 'next/navigation'
import { useSession } from 'next-auth/react'


export default function joinnowbtn() {
    const router = useRouter()
    const {data} = useSession()

    const forwardedURL = {
        url: data?.user ? `${process.env.NEXT_PUBLIC_WEB_URL}/dashboard` : `${process.env.NEXT_PUBLIC_WEB_URL}/signings/register`,
        btn: data?.user ? 'Back to Dashboard' : 'Join Now'
    } 


    return (
        <button 
        className="bg-primary p-4 px-12 m-auto rounded-md text-base font-semibold lg:m-0 lg:mr-auto"
        onClick={() => router.replace(forwardedURL.url)}>{forwardedURL.btn}</button>
    )
}
