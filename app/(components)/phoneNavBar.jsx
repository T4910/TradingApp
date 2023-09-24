'use client'
import DropDown  from './phoneNavBarDropdown';
import { useState } from 'react'
import { SlMenu } from "react-icons/sl";
import { useSession } from 'next-auth/react'



export default function phoneNavBar() {
    const [showDD, setShowDD] = useState(false)
    const {data} = useSession()

    return (
        <div>
            <div className="flex justify-between px-4 py-2 bg-black opacity-95">
                <p className='font-bold text-white'>TradeUp</p>
                <button className='border p-1 rounded' onClick={() => setShowDD(!showDD)}><SlMenu /></button>
            </div>
            <DropDown visibility={showDD} auth={data} func={setShowDD}/>
        </div>
    )
}
