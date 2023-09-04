import LogOut from './logOutBtn'
import Link from 'next/link'


const DropDown = ({visibility, auth}) => {
    console.log(visibility)
    const isHidden = visibility ? '' : 'hidden'
    console.log(visibility, `flex flex-col ${isHidden}`)
    return(
        <div className={`flex flex-col ${isHidden}`}>
            {!auth?.user && <Link href="/">Home</Link>}
            {!auth?.user && <Link href="/signings/login">Sign in</Link>}
            {!auth?.user && <Link href="/signings/register">Sign up</Link>}
            <Link href="/about">About Dev</Link>
            {auth?.user && <LogOut />}
        </div>
    )
}

export default DropDown