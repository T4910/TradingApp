// 'use client'
// import { signOut } from 'next-auth/react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

export default function logOutLink() {
    // const router = useRouter()

    return <Link href='/about' className='font-bold text-secondary underline underline-offset-1'>more about me</Link>
}

    // <button onClick={async () =>{ await signOut({redirect: false}); router.push('/about') }} 
    //         className='font-bold text-secondary underline underline-offset-1'>more about me</button> 