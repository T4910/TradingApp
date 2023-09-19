import { useState, useEffect } from 'react'
import {signIn, useSession} from 'next-auth/react'
import Submit from './submitBTN'


export default function registerForm({setFlashData}) {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        // conditions for valid password
        // At least one uppercase, one lowercase a special character and a numerical
        const passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
        
        if(!password.match(passwordRegex)) console.log('is should show');
        (!password.match(passwordRegex)) ? setFlashData({
            status: 'warning',
            isShown: true,
            children: 'not valid password'
        }) : setFlashData ({
            status: 'good',
            isShown: true,
            children: 'password is valid'
        })
    }, [password])
    
    useEffect(() => {
        const emailRegex = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"
        if (!email.match(emailRegex)) return
        const controller = new AbortController()
        let isThereAnotherEmail;


        // checking if no other user is using email in database
        let timeout = setTimeout( async () => {
            let res = await fetch('/api/signing/DBemailChecking', {
                method: 'POST',
                signal: controller.signal,
                body: JSON.stringify({
                    email: email
                })
            })
            isThereAnotherEmail = await res.json()
            console.log(isThereAnotherEmail);

            // conditions for valid email
            (isThereAnotherEmail !== 0) ? setFlashData({
                status: 'warning',
                isShown: true, 
                children: 'email has been used before'
            }) : setFlashData({
                status: 'good',
                isShown: true,
                children: 'Email is free'
            });
        }, 3000)


        return () => {
            controller.abort()
            clearTimeout(timeout)
        }
    }, [email])

    async function REGISTER(e){
        e.preventDefault()
    
        const details = {
            firstname: e.target.childNodes[0].value,
            surname: e.target.childNodes[1].value,
            email: e.target.childNodes[2].value,
            password: e.target.childNodes[3].value
        }

        console.log('Registering...', details)

    
        // fix popup state so that it only runs when the user as started typing...
        // empty field validation
        if (details.surname === '' || details.firstname === '' || details.password === '' || details.email === '' ){
            return setFlashData({
                       status: 'warning', 
                       isShown: true, 
                       content: 'missing fields'
           })
        }
    
        // TODO: email verification
        
        // create User
        const createUserRes = await fetch('/api/signing/register',{
            headers: { "Content-Type": "application/json" },
            method: 'POST',
            body: JSON.stringify(details)
        })
    
        // DONE: safe fail check for if user was created
        // DONE: a popup message depicting whether something went wrong...
        if(!createUserRes.ok) return setFlashData({
            status: 'error', 
            isShown: true, 
            content: 'Something went wrong!'
        })
    
    
        // TODO: identifier for if user is a newUser should be added (in Next-Auth documentation)
        await signIn('credentials', {
            redirect: true,
            callbackUrl: `${process.env.NEXT_PUBLIC_WEB_URL}/dashboard`,
            email: details.email,
            password: details.password,
        })
    }

    return (
        <form className='flex flex-col mb-6' onSubmit={(e) => REGISTER(e)}>
            <input className='w-[72vw] p-2 px-4 m-auto mb-4' 
             type="text" name='surname' placeholder='surname' required/>
            <input className='w-[72vw] p-2 px-4 m-auto mb-4' 
             type="text" name='name' placeholder='Name' required/>
            <input className='w-[72vw] p-2 px-4 m-auto mb-4' 
             type="email" name='email' placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className='w-[72vw] p-2 px-4 m-auto mb-4' 
             type="password" name='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Submit />
        </form>
  )
}