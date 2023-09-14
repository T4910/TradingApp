'use client'
import PhoneNavBar from './phoneNavBar'
import BiggerNavBar from './bigNavBar'
import useMediaQuery from "./hooks/useMediaQuery"


export default function NavBar({page}) {
  const isMobile = useMediaQuery('sm')

  return (
    <div className="flex flex-col px-4 py-2 fixed w-full bg-gray-75 top-0 z-10 lg:relative lg:px-8 ">
      {isMobile ? <PhoneNavBar /> : <BiggerNavBar page={page}/>}  
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



