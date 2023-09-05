import LogOut from './logOutBtn'
import Link from 'next/link'


const DropDown = ({visibility, auth}) => {
    const isHidden = visibility ? '' : 'hidden'
    return(
        <div className={`flex flex-col mt-4 ${isHidden}`}>
            {!auth?.user && <Link href="/" className='mb-1'>Home</Link>}
            {!auth?.user && <Link href="/signings/login" className='mb-1'>Sign in</Link>}
            {!auth?.user && <Link href="/signings/register" className='mb-1'>Sign up</Link>}
            <Link href="/about" className='mb-1'>About Dev</Link>
            {auth?.user && <LogOut />}
        </div>
    )
}

export default DropDown