'use client'
import {signIn} from 'next-auth/react'
import {SiGoogle} from "react-icons/si"


export default function googleBTN() {
    return (
        <button className='flex items-center gap-2 p-2 px-4 justify-center w-full bg-primary text-center' 
        onClick={() => signIn('google')}>Google <SiGoogle /></button>
    )
}