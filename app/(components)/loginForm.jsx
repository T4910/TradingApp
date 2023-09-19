'use client'
import {useState, useEffect} from 'react'
import {signIn, useSession} from 'next-auth/react'
import {useRouter} from 'next/navigation'
import Flash from './flashBox'
import Inputs from './inputs'
import Others from './otherLogins'




export default function loginForm() {
    const {data: session} = useSession()
    const router = useRouter()
    
    // if there's a session send to dashboard
    useEffect(() => session && router.replace(`${process.env.NEXT_PUBLIC_WEB_URL}/dashboard`), [session])
    const [flash, setFlash] = useState({isShown: false})


    async function LOGIN(e){
        e.preventDefault()

        const loginDetails = {
            email: e.target.childNodes[1].childNodes[0].value, 
            password: e.target.childNodes[1].childNodes[1].value
        }

        if (!loginDetails.email || !loginDetails.password) return setFlash({status: 'error', isShown: true,
            children: 'Invalid Input'
        })
        
        // email validation
        const emailRegex = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"
        if (!loginDetails.email.match(emailRegex)){
            console.log('wrong email')

            return setFlash({ status: 'error', isShown: true,
                children: 'Invalid Email address'
            })
        } 
            
        // Sign In
        // NP: NOT POSSIBLE use next.js redirect instead of callback
        // DONE: make popup alert for 'no user found' or 'invalid password' ('invalid user or password. Try again') 
        // DONE: make popup alert for any other error that occurs on server 
        
        let {ok: itSignedIn, error, status} = await signIn('credentials', {redirect: false, callbackUrl: `${process.env.NEXT_PUBLIC_WEB_URL}/dashboard`, ...loginDetails})
        if(itSignedIn) return router.push(`${process.env.NEXT_PUBLIC_WEB_URL}/dashboard`);
            
        
        if(status == 401) return setFlash({ status: 'error', isShown: true,
            children: 'Invalid user or password. Try again.'
        })
            
        
        else return setFlash({ status: 'error', isShown: true,
            children: 'Problem with Server. Try again later.'
        })
    }

    return (
        <form  className="flex flex-col" onSubmit={(e) => {LOGIN(e)}}>
            <Flash {...flash} setData={setFlash}/>
            <Inputs />
            <Others />
        </form>
  )
}
