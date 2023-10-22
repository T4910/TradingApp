import Content from './NavBarContent'
import Links from './navLinks'
import { getServerSession } from "next-auth"
import { authOptions } from '../api/auth/[...nextauth]/route'



export default function NavBar({page, links}) {
  const { data } = getServerSession(authOptions)

  return (
    // backdrop-blur-md bg-opacity-50
    <div className="text-white flex flex-col md:px-4 md:py-2 fixed w-full top-0 z-20 md:bg-black bg-opacity-95 lg:px-8 ">
      <Content links={links} page={page} data={data}>
        <Links links={links} data={data}/>
      </Content>
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



