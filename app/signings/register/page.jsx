import { getServerSession } from 'next-auth'
import { authOptions } from "../../api/auth/[...nextauth]/route"
import { redirect } from 'next/dist/server/api-utils'
import NavBar from "../../(components)/NavBar"
import Form from "../../(components)/registerForm"
import Others from '../../(components)/otherLogins'
import Footer from '../../(components)/Footer'
import Link from 'next/link'


export default async function page() {
    let session = await getServerSession(authOptions)
    session && redirect('/dashboard')

    
    return (
        <>
            <div className='bg-black md:max-h-screen md:py-40'>
                <NavBar/>
                <div className='min-h-[100dvh] pt-24 pb-12 text-white
                                md:border md:w-[60vw] md:mx-auto md:min-h-max md:rounded md:shadow-md'>
                    <h2 className='text-center font-semibold text-2xl mb-8'>Register</h2>
                    <Form />
                    <hr className="m-auto my-0 w-3/4"/>
                    <Others reg={true}/>
                    <p className='text-center'>Already have an account? <Link className='text-primary font-medium' href='/signings/login'>Sign in</Link></p>
                </div>
            </div>  
            <Footer />
        </>
    )
}
