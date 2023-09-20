'use client'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useSession} from 'next-auth/react'
import NavBar from "../../(components)/NavBar"
import Form from "../../(components)/registerForm"
import Flash from '../../(components)/flashBox'
import Others from '../../(components)/otherLogins'
import Footer from '../../(components)/Footer'
import Link from 'next/link'


export default function page() {
    const router = useRouter()
    const {data: session} = useSession()

    useEffect(() => session && router.replace(`${process.env.NEXT_PUBLIC_WEB_URL}/dashboard`), [session])

    const [flashData, setFlash] = useState({isShown: false})
    
    return (
        <>
            <div className='bg-black md:max-h-screen md:py-40'>
                <NavBar/>
                <div className='min-h-screen pt-24 pb-12 text-white
                                md:border md:w-[60vw] md:mx-auto md:min-h-max md:rounded md:shadow-md'>
                    <h2 className='text-center font-semibold text-2xl mb-8'>Register</h2>
                    <Flash {...flashData} setData={setFlash}/>
                    <Form setFlashData={setFlash}/>
                    <hr className="m-auto my-0 w-3/4"/>
                    <Others reg={true}/>
                    <p className='text-center'>Already have an account? <Link className='text-secondary font-medium' href='/signings/login'>Sign in</Link></p>
                </div>
            </div>  
            <Footer />
        </>
    )
}
