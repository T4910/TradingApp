'use client'
import NavBar from '../(components)/NavBar'
import Footer from '../(components)/Footer'
import SideBar from '../(components)/sideBar'
import {signOut} from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'

// TODO: Prevent users from going back to prohibited pages
// TODO: Make loading signs for the loading components
// TODO: Prevent entry into dashboard page without authentication
// DONE: Make user id availabe to all components and sub-pages by using react context hook
// DONE: change NavBar and Footer when authenticated...
// TODO: Put a sidebar

// export const IDContext = createContext(null) 

export default function page() {
  return (
    <div>
      <NavBar auth={true} />
      <div className='grid place-items-center h-[100dvh] w-screen'>
        <div>
          <p className='font-bold text-5xl mb-4'>Coming soon!</p>
          <p className='text-center'>Please log out <button onClick={async () =>{ await signOut(); redirect('/')}} 
                    className='font-bold text-primary underline underline-offset-1'>log out</button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}


// {/* <IDContext.Provider value={ID}>
// <div>
//   <NavBar auth={true} />
//   <SideBar/>
//   <div>this is the dashboard</div>
//   <Footer />
// </div>
// </IDContext.Provider> */}

