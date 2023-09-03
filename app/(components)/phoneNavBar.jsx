'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SlMenu } from "react-icons/sl";
import {useSession} from 'next-auth/react'

import LogOut from './logOutBtn'



const DropDown = (visibility, auth) => {
    return(
        <div className={`flex flex-col ${!visibility && 'hidden'}`}>
            {!auth && <Link href="/signings/login">Sign in</Link>}
            {!auth && <Link href="/signings/register">Sign up</Link>}
            <Link href="/about">About Dev</Link>
            {auth && <LogOut />}
        </div>
    )
}

export default function phoneNavBar() {
    const [showDD, setShowDD] = useState(false)
    const {data} = useSession()

    return (
        <>
            <div className="flex justify-between">
                <Image className='m-0' src="/" width={10} height={10} alt="Logo"/>   
                <button onClick={() => setShowDD(!showDD)}><SlMenu /></button>
            </div>
            <DropDown visibility={showDD} auth={data}/>
        </>
    )
}
