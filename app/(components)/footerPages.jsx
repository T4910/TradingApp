'use client'
import Link from 'next/link'
import LogOut from './logOutBtn'
import { useSession } from 'next-auth/react'


export default function footerPages() {
    const {data} = useSession()

    return (
        <div className='flex flex-col pt-4 pl-8'>
            {!data?.user && <Link href="/">Home</Link>}
            {!data?.user && <Link href="/signings/login">Login</Link>}
            {!data?.user && <Link href="/signings/register">Sign up</Link>}
            <Link href="/about">About Dev</Link>
            {data?.user && <LogOut />}
        </div>
    )
}
