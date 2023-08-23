'use client'
import {useRef} from 'react'
import {signIn} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import NavBar from "../../(components)/NavBar"
import useAlertPopup from '../../(components)/hooks/useAlertPopup'

export default function page() {
    const router = useRouter()
    const emailBox = useRef()
    const passwordBox = useRef()

    const [PopUp, setPopUp] = useAlertPopup()

    async function LOGIN(e){
        e.preventDefault()
        
        const loginDetails = {
            email: emailBox.current.value, 
            password: passwordBox.current.value
        }
        
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
        let {ok: itSignedIn } = await signIn('credentials', {redirect: false, ...loginDetails})
        console.log(itSignedIn);
        if(itSignedIn){
            router.replace(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`);
            return
        } 

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
    <div>
        <NavBar/>
        <h2>Log in</h2>
        <PopUp />
        <form onSubmit={(e) => LOGIN(e)}>
            <label htmlFor="email">Email: </label>
            <input 
                className=''
                name="email"
                type="text" 
                ref={emailBox}
                autoComplete='true'/>
            <label htmlFor="password">Password: </label>
            <input 
                name="password"                 
                type="password"
                ref={passwordBox}
                autoComplete='true'/>
            <input type="submit" />
            <button onClick={() => signIn('google')}>GOOGLE BTN tobeadded</button>
        </form>
    </div>
  )
}
