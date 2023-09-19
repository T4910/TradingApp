'use client'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useSession} from 'next-auth/react'
import NavBar from "../../(components)/NavBar"
import Form from "../../(components)/registerForm"
import Flash from '../../(components)/flashBox'
import Others from '../../(components)/otherLogins'
import Footer from '../../(components)/Footer'


export default function page() {
    const router = useRouter()
    const {data: session} = useSession()

    useEffect(() => session && router.replace(`${process.env.NEXT_PUBLIC_WEB_URL}/dashboard`), [session])

    const [flashData, setFlash] = useState({isShown: false})
    
    return (
        <div>
            <NavBar/>
            <div className='h-screen pt-24 bg-black text-white'>
                <h2 className='text-center font-semibold text-2xl mb-8'>Register</h2>
                <Flash {...flashData} setData={setFlash}/>
                <Form setFlashData={setFlash}/>
                <hr className="m-auto my-0 w-3/4"/>
                <Others reg={true}/>
            </div>
            <Footer />
        </div>  
    )
}
