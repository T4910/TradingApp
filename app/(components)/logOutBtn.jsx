'use client'
import {signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function logOutBtn() {
  let router = useRouter()
  return (
    <button className='p-1 border border-white rounded w-[48%] text-center' onClick={async () => {await signOut({redirect: false}); router.push('/')}}>Log Out</button>
  )
}
