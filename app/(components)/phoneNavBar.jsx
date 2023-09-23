'use client'
import { useState } from 'react'
import { SlMenu } from "react-icons/sl";
import { useSession } from 'next-auth/react'
import DropDown  from './phoneNavBarDropdown';



export default function phoneNavBar() {
    const [showDD, setShowDD] = useState(false)
    const {data} = useSession()

    return (
        <div>
            <div className="flex justify-between">
                <p className='font-bold text-white'>TradeUp</p>
                {/* <Image src="/images/3-19.jpg" width={10} height={10} alt="Logo"/>    */}
                {/* <div>
                    ID: {data?.user.id}
                </div> */}
                <button className='border p-1 rounded' onClick={() => setShowDD(!showDD)}><SlMenu /></button>
            </div>
            <DropDown visibility={showDD} auth={data}/>
        </div>
    )
}
