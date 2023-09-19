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
        <div className="bg-gray-50 mt-10 pt-10">
            <NavBar/>
            <h2 className='text-center font-semibold text-2xl mb-4'>Register</h2>
            <Flash {...flashData} setData={setFlash}/>
            <Form setFlashData={setFlash}/>
            <Others />
            <Footer />
        </div>  
    )
}
