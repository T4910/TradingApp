'use client'
import Link from 'next/link'
import LogOut from './logOutBtn'
import { useSession } from 'next-auth/react'


export default function footerPages() {
    const {data} = useSession()

    return (
        <div className='flex flex-col pt-8 pl-8'>
            <Link href="/"><u>Home</u></Link>
            {!data?.user && <Link href="/signings/login"><u>Login</u></Link>}
            {!data?.user && <Link href="/signings/register"><u>Sign up</u></Link>}
            {data?.user && <Link href="/dashboard"><u>Dashboard</u></Link>}
            <Link href="/about"><u>About Dev</u></Link>
            {data?.user && <LogOut />}
        </div>
    )
}
