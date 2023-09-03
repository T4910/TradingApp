'use client'
import PhoneNavBar from './phoneNavBar'
import useMediaQuery from "./hooks/useMediaQuery"

import {useRouter} from 'next/navigation'




export default function NavBar({page}) {
  const isMobile = useMediaQuery('sm')
  // const isAlsoMobile = useMediaQuery('sm')
  const isTablet = useMediaQuery('md')
  const isDesktop = useMediaQuery('lg')

  return (
    <div className="flex flex-col px-4 py-2 border-b">
      {isMobile ? <PhoneNavBar /> : 'not phone'}  
    </div>
  )
}



















let AlightBtn = (toggle) => {
  return (
    toggle && <button 
      className="bg-primary font-bold p-1 rounded-xl"
      onClick={() => router.replace(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`)}
    >
      Dashboard
    </button>
)}



