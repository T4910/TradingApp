'use client'
import PhoneNavBar from './phoneNavBar'
import BiggerNavBar from './bigNavBar'
import useMediaQuery from "./hooks/useMediaQuery"


export default function NavBar({page}) {
  const isMobile = useMediaQuery('sm')

  return (
    // backdrop-blur-md bg-opacity-50
    <div className="text-white flex flex-col md:px-4 md:py-2 fixed w-full top-0 z-20 md:bg-black bg-opacity-95 lg:px-8 ">
      {isMobile ? <PhoneNavBar /> : <BiggerNavBar page={page}/>}  
    </div>
  )
}



















let AlightBtn = (toggle) => {
  return (
    toggle && <button 
      className="bg-primary font-bold p-1 rounded-xl"
      onClick={() => router.replace(`/dashboard`)}
    >
      Dashboard
    </button>
)}



