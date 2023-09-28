'use client'
import {signIn} from 'next-auth/react'
import {SiGoogle} from "react-icons/si"


export default function googleBTN() {
    return (
        <button aria-disabled disabled className=' disabled:opacity-50 flex items-center gap-2 rounded p-2 px-4 justify-center w-full bg-secondary text-center' 
        onClick={() => signIn('Google')}>Google <SiGoogle /></button>
    )
}
