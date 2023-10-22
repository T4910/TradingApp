import Link from 'next/link'
import { SiGithub, SiLinkedin } from "react-icons/si"
import LogOut from './logOutBtn'



export default function navLinks({links, data}) {
    return (
        <>
            {links && <Link href='/' className='mr-8 text-2xl rounded-full md:hidden'><SiLinkedin/></Link>}
            {links && <Link href='/' className='mr-8 text-2xl rounded-full md:hidden'><SiGithub/></Link>}
            {!data?.user && <Link href="/signings/login" className='hidden md:block'>Log in</Link>}
            {!data?.user && <Link href="/signings/register" className='hidden md:block'>Sign up</Link>}
            {(data?.user && page == 'startPage') && <Link href="/dashboard" className='md:hidden'>Dashboard</Link>}
            {data?.user && <LogOut />}
            <Link href="/about" className='text-primary font-medium hidden md:block'>About Dev</Link>
        </>
    )
}
