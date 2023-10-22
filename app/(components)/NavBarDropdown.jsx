import LogOut from './logOutBtn'
import Link from 'next/link'


const DropDown = ({visibility, auth, func}) => {
    const isHidden = visibility ? '' : 'hidden'
    return(
        <div className={`flex flex-col h-screen ${isHidden}`}>
            <div className='max-h-fit flex justify-between gap-y-4 px-4 flex-wrap pt-8 pb-8 border-b bg-black opacity-95'>
                {!auth?.user && <Link className='p-1 border border-white rounded w-[48%] text-center' href="/" >Home</Link>}
                {!auth?.user && <Link className='p-1 border border-white rounded w-[48%] text-center' href="/signings/login" >Sign in</Link>}
                {!auth?.user && <Link className='p-1 border border-white rounded w-[48%] text-center' href="/signings/register" >Sign up</Link>}
                                <Link className='p-1 border border-white rounded w-[48%] text-center' href="/about" >About Dev</Link>
                {auth?.user && <LogOut />}
            </div>
            <div className='opacity-40 bg-black flex-grow h-full' onClick={() => func(false)}></div>
        </div>
    )
}

export default DropDown