'use client'
import {useRef, useEffect} from 'react'
import {signIn, useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import useAlertPopup from './hooks/useAlertPopup'
import Inputs from './inputs'
import Submit from './submitBTN'
import Others from './otherLogins'




export default function loginForm() {
    const router = useRouter()
    const {data: session} = useSession()
    const [PopUp, setPopUp] = useAlertPopup()

    // if there's a session send to dashboard
    useEffect(() => session && router.replace(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`), [session])


    async function LOGIN(e){
        e.preventDefault()

        const loginDetails = {
            email: e.target.childNodes[1].childNodes[0].value, 
            password: e.target.childNodes[1].childNodes[1].value
        }

        if (!loginDetails.email || !loginDetails.password) return setPopUp({
            description: 'error',
            visibility: true,
            content: 'Invalid Input'
        })
        
        // email validation
        const emailRegex = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"
        if (!loginDetails.email.match(emailRegex)){
            console.log('wrong email')

            return setPopUp({
                description: 'error',
                visibility: true,
                content: 'Invalid Email address'
            })
        } 
            
        // Sign In
        // TODO: NOT POSSIBLE use next.js redirect instead of callback
        // DONE: make popup alert for 'no user found' or 'invalid password' ('invalid user or password. Try again') 
        // DONE: make popup alert for any other error that occurs on server 
        let {ok: itSignedIn } = await signIn('credentials', {redirect: true, callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`, ...loginDetails})
        console.log(itSignedIn);
        if(itSignedIn) return // router.push(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`);

        setPopUp({
            description: 'error',
            visibility: true,
            content: 'Invalid user or password. Try again.'
        })
        
        setPopUp({
            description: 'error',
            visibility: true,
            content: 'Problem with Server. Try again later.'
        })
    }

    return (
        <form  className="flex flex-col" onSubmit={async (e) => {await LOGIN(e)}}>
            <PopUp />
            <Inputs />
            <Submit />
            <Others />
        </form>
  )
}
