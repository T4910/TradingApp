'use client'
import LogOut from './logOutBtn'
import Link from 'next/link'
import { useState, useEffect } from 'react'


const DropDown = ({visibility, auth}) => {
    let [authed, setAuthed] = useState(auth)
    useEffect(() => setAuthed(auth), [auth])
    const isHidden = visibility ? '' : 'hidden'
    return(
        <div className={`flex flex-col mt-4 ${isHidden}`}>
            {!authed?.user && <Link href="/" className='mb-1'>Home</Link>}
            {!authed?.user && <Link href="/signings/login" className='mb-1'>Sign in</Link>}
            {!authed?.user && <Link href="/signings/register" className='mb-1'>Sign up</Link>}
            <Link href="/about" className='mb-1'>About Dev</Link>
            {authed?.user && <LogOut />}
        </div>
    )
}

export default DropDown