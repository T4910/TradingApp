'use client'
import NavBar from '../(components)/NavBar'
import Footer from '../(components)/Footer'
import d,{useSession} from 'next-auth/react'
import { authOptions } from '../../pages/api/auth/[...nextauth]'



export default function page() {
  let {data} = useSession()
  console.log('Sessions on Dashboard: ', data)
  return (
    <>
      <NavBar />
      <div>this is the dashboard</div>
      <Footer />
    </>
  )
}


