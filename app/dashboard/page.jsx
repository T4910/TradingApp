import NavBar from '../(components)/NavBar'
import Footer from '../(components)/Footer'
import SideBar from '../(components)/sideBar'
import LogOutLink from '../(components)/logOutLink'
import AboutDev from '../(components)/aboutdevlink'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { PrismaClient } from "@prisma/client"


// TODO: Prevent users from going back to prohibited pages
// TODO: Make loading signs for the loading components
// TODO: Prevent entry into dashboard page without authentication
// DONE: Make user id availabe to all components and sub-pages by using react context hook
// DONE: change NavBar and Footer when authenticated...
// TODO: Put a sidebar

// export const IDContext = createContext(null) 

export default async function page() {
    const prisma = new PrismaClient()
    const session = await getServerSession(authOptions)
    const userInfo = await prisma.user.findUnique({where: { id: session?.user.id }})



    return (
      <div>
        <NavBar auth={true} />
        <div className='grid place-items-center h-[100dvh] w-screen text-center'>
          <div>
            <p className='font-bold text-5xl text-center mb-4'>Coming soon!</p>
            <p>Sorry <span className='font-bold text-primary'>{userInfo?.username}</span>, I'm not done with the site.</p>
            <p>You could learn <AboutDev /> or you could <LogOutLink /></p>
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

