import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/navigation'




export default function bigNavBar({page}) {
    const {data: authed} = useSession()
    const router = useRouter()

    return (
        <div className="flex justify-between items-center">
            <p className='font-bold text-white px-2 py-1 bg-black rounded-md'>TradeUp</p>
            {/* <Image src="/images/3-19.jpg" width={10} height={10} alt="Logo"/>    */}
            <div className='flex items-center gap-8 text-gray-5'>
                {!authed?.user && <Link href="/signings/login" className=''>Log in</Link>}
                {!authed?.user && <Link href="/signings/register" className=''>Sign up</Link>}
                {(authed?.user && page == 'startPage') && <button onClick={() => router.push('/dashboard')}>Dashboard</button>}
                {authed?.user && <LogOut />}
                <Link href="/about" className='text-primary font-medium'>About Dev</Link>
            </div>
        </div>
    )
}
