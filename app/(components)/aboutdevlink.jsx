'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function aboutdevlink() {
    const [loading, setloading] = useState('')
    const router = useRouter()
    return (
        <button onClick={() => {
            setloading('o')
            router.push(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/about`)}}
        className='bg-secondary w-[50vw] m-auto p-2 px-4 font-medium rounded'>See more about Developer... {loading}</button>
    )
}
