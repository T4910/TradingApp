'use client'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function logOutLink() {
    const router = useRouter()

    return (
        <button onClick={async () =>{ await signOut({redirect: false}); router.push('/about') }} 
                className='font-bold text-secondary underline underline-offset-1'>more about me</button> 
    )
}
