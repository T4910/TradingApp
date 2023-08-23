'use client'
import {signOut} from 'next-auth/react'


export default function logOutBtn() {
  return (
    <button onClick={async () => 
      await signOut({
      redirect: true,
      callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/`
    })}>Log Out</button>
  )
}
