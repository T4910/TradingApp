'use client'
import {signOut} from 'next-auth/react'
import router from 'next/navigation'

export default function logOutBtn() {
  return (
    <button onClick={async () => {
        await signOut({
            redirect: true,
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/signings/login`
        })

    }}>Log Out</button>
  )
}
