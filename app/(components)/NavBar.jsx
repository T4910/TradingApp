'use client'
import Link from 'next/link'
import LogOut from './logOutBtn'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'



export default function NavBar({auth, page}) {
  const {data} = useSession()
  const router = useRouter()


  const unAuthenticatedNavBar =     
  <>
    <li>Logo</li>
    <li><Link href="/signings/login">Sign in</Link></li>
    <li><Link href="/signings/register">Sign up</Link></li>
    <li><Link href="/about">About</Link></li>
  </>        

  const authenticatedNavBar = 
  <>
    <li>Logo</li>
    {(page == 'startPage') ? 
      <button onClick={() => router.replace(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`)}>Dashboard</button> 
      : <LogOut />} 
  </>

  // const listinNavBar = 
  // <>  
  //   <li>Logo</li>
    
  //   if(page == 'dashboard') <LogOut />
  //   if(page == 'startPage' && data) 

  //   <li><Link href="/signings/login">Sign in</Link></li>
  //   <li><Link href="/signings/register">Sign up</Link></li>
  //   <li><Link href="/about">About</Link></li>
  // </>

  return (
    <div style={{backgroundColor: '#FAFAFA'}}>
        <ul>
          {(auth || (page == 'startPage' && data)) ? authenticatedNavBar : unAuthenticatedNavBar}
        </ul>
        ID: {data?.user.id}
    </div>
  )
}

let Dashboard = () => <button onClick={() => router.replace(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`)}>Dashboard</button>

