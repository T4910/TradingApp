import NavBar from "../../(components)/NavBar"
import Form from '../../(components)/loginForm'
import Footer from '../../(components)/Footer'
import Link from "next/link"
import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import { authOptions } from "../../api/auth/[...nextauth]/route"


export default async function page() {
  let session = await getServerSession(authOptions);
  session && redirect('/dashboard');


  return (
    <>
      <div className="bg-black md:max-h-screen md:py-40">
          <NavBar/>
          <div className='bg-black text-white h-[100dvh] pt-24 pb-12 flex flex-col md:border md:w-[60vw] md:mx-auto md:h-fit md:rounded md:shadow-md'>
            <h1 className='text-center font-semibold text-2xl mb-8'>Login</h1>
            <Form />  
            <p className='text-center'>Don't have an account? <Link className='text-primary font-medium' href='/signings/register'>Sign up</Link></p>
          </div>
      </div>
      <Footer />
    </>
  )
}
