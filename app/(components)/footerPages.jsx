'use client'
import Link from 'next/link'
import LogOut from './logOutBtn'
import { useSession } from 'next-auth/react'


export default function footerPages() {
    const {data} = useSession()

    return (
        <div className='flex flex-col pt-8 pr-8 text-end'>
            <Link className='mb-2' href="/">Home</Link>
            {!data?.user && <Link className='mb-2' href="/signings/login">Login</Link>}
            {!data?.user && <Link className='mb-2' href="/signings/register">Sign up</Link>}
            {data?.user && <Link className='mb-2' href="/dashboard">Dashboard</Link>}
            <Link className='mb-2' href="/about">About Dev</Link>
            {data?.user && <LogOut />}
        </div>
    )
}
