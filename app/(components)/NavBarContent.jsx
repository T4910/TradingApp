'use client'
import DropDown  from './NavBarDropdown';
import { useState } from 'react'
import { SlMenu } from "react-icons/sl";


export default function phoneNavBar({children, data}) {
    const [showDD, setShowDD] = useState(false)

    return (
        <>
            <div className="flex justify-between px-4 py-4 bg-black opacity-95 md:items-center md:p-0">
                <p className='font-bold text-white md:px-2 md:py-1 md:bg-black md:rounded-md'>TradeUp</p>
                <div className='flex items-center md:text-center md:gap-8 md:text-gray-5'>
                    {children}
                    <button className='border p-1 rounded md:hidden' onClick={() => setShowDD(!showDD)}><SlMenu /></button>
                </div>
            </div>
            { <DropDown visibility={showDD} auth={data} func={setShowDD}/> }
        </>
    )
}
