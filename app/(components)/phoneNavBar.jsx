'use client'
import DropDown  from './phoneNavBarDropdown';
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { SlMenu } from "react-icons/sl";
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook, SiTelegram, SiWhatsapp} from "react-icons/si"
import Link from 'next/link';



export default function phoneNavBar() {
    const [showDD, setShowDD] = useState(false)
    const {data} = useSession()

    return (
        <div>
            <div className="flex justify-between px-4 py-4 bg-black opacity-95">
                <p className='font-bold text-white'>TradeUp</p>
                <div className='flex items-center'>
                    {<Link href='/' className='mr-8 text-2xl rounded-full'><SiLinkedin/></Link>}
                    {<Link href='/' className='mr-8 text-2xl rounded-full'><SiGithub/></Link>}
                    <button className='border p-1 rounded' onClick={() => setShowDD(!showDD)}><SlMenu /></button>
                </div>
            </div>
            <DropDown visibility={showDD} auth={data} func={setShowDD}/>
        </div>
    )
}
