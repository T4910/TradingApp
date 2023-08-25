'use client'
import {useState, useRef, useEffect} from 'react'
import NavBar from "../../(components)/NavBar"
import {useRouter} from 'next/navigation'
import InfoField from '../../(components)/infoField'
import {signIn, useSession} from 'next-auth/react'


async function REGISTER(e, details, changeState){
    e.preventDefault()
    console.log('Registering...')

    // fix popup state so that it only runs when the user as started typing...
    // empty field validation
    if (details.surname === '' || details.firstname === '' || details.password === '' || details.email === '' ){
        return changeState({
                   description: 'warning', 
                   visibility: true, 
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
    const {userCreated} = await createUserRes.json()

    // DONE: safe fail check for if user was created
    // DONE: a popup message depicting whether something went wrong...
    if(!userCreated) return changeState({
        description: 'error', 
        visibility: true, 
        content: 'Something went wrong!'
    })


    // TODO: identifier for if user is a newUser should be added (in Next-Auth documentation)
    await signIn('credentials', {
        redirect: true,
        callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`,
        email: details.email,
        password: details.password,
    })
}

export default function page() {
    const router = useRouter()
    const {data: session} = useSession()
    useEffect(() => session && router.replace(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/dashboard`), [session])


    // TODO: fix problem of surname and lastname field state
    // TODO: fix the surname firstname problem in database (if possible)
    const surnameRef = useRef()
    const firstnameRef = useRef()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [{description, visibility, content}, setinfoFieldContent] = useState({
        description: 'info',
        visibility: false,
        content: '...'
    })

    
    useEffect(() => {
        // conditions for valid password
        // At least one uppercase, one lowercase a special character and a numerical
        const passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
        (!password.match(passwordRegex)) ? setinfoFieldContent({
            description: 'warning',
            visibility: true,
            content: 'not valid password'
        }) : setinfoFieldContent({
            description: 'good',
            visibility: true,
            content: 'password is valid'
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
            (isThereAnotherEmail !== 0) ? setinfoFieldContent({
                description: 'warning',
                visibility: true, 
                content: 'email has been used before'
            }) : setinfoFieldContent({
                description: 'good',
                visibility: true,
                content: 'Email is free'
            });
        }, 3000)


        return () => {
            controller.abort()
            clearTimeout(timeout)
        }
    }, [email])


  return (
    <div>
        <NavBar/>
        <h2>Sign up</h2>
        <InfoField description={description} visibility={visibility} settingFunction={setinfoFieldContent}>{content}</InfoField>
        <form onSubmit={(e) => REGISTER(e, {
            password: password,
            email: email,
            surname: surnameRef.current.value,
            orignalname: firstnameRef.current.value
        }, setinfoFieldContent)}>
            <input 
                name="surname"
                type="text" 
                required={true}
                ref={surnameRef}/>
            <input 
                name="lastname"
                type="text" 
                required={true}
                ref={firstnameRef}/>
            <input 
                name="email"
                type="email" 
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            <input 
                name="password"                 
                type="password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" />
        </form>
    </div>  
  )
}
