'use client'
import {useRef} from 'react'
import NavBar from "../../(components)/NavBar"
import useBasicToggle from '../../(components)/hooks/useBasicToggle'
import useAlertPopup from '../../(components)/hooks/useAlertPopup'
import {signIn} from 'next-auth/react'

export default function page() {
    const emailBox = useRef()
    const passwordBox = useRef()
    const [PopUp, setPopUp] = useAlertPopup()

    async function LOGIN(e){
        e.preventDefault()
        
        const loginDetails = {
            email: emailBox.current.value, 
            password: passwordBox.current.value
        }
        console.log('signing in ...', loginDetails)
        
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
            


        let user = await signIn('credentials', {
            redirect: true,
            callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
            ...loginDetails
        })
        console.log('USer: ',user)
        console.log(signIn)


    }

  return (
    <div>
        <NavBar/>
        <h2>Log in</h2>
        <PopUp></PopUp>
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
