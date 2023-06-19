'use client'
import {useState, useRef} from 'react'
import NavBar from "../../(components)/NavBar"
import InfoField from '../../(components)/infoField'

// password validation
// email validation

async function REGISTER(e, details, changeState){
    e.preventDefault()
    console.log('Registering...')

    // empty field validation
    if (details.surname === '' || details.firstname === '' || 
        details.password === '' || details.email === '' ) return changeState({
                description: 'warning', 
                visibility: true, 
                content: 'missing fields'
        })

    // password validation
    // email verification
    // check database to prevent 
    
    const res = await fetch('/api/signing/register',{
        headers: { "Content-Type": "application/json" },
        method: 'POST',
        body: JSON.stringify(details)
    })
    const data = await res.json()

    

    console.log({
        dataEntered: details,
        // createdUser: user
    })
}

export default function page() {
    const [details, setDetails] = useState({password: 'j', email:'j@s.com'})
    const [{description, visibility, content}, setinfoFieldContent] = useState({
        description: 'info',
        visibility: false,
        content: '...'
    })
    const surnameRef = useRef()
    const firstnameRef = useRef()


  return (
    <div>
        <NavBar/>
        <h2>Sign up</h2>
        <InfoField description={description} visibility={visibility} settingFunction={setinfoFieldContent}>{content}</InfoField>
        <form onSubmit={(e) => REGISTER(e, {
            ...details, 
            surname: surnameRef.current.value,
            firstname: firstnameRef.current.value
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
                value={details.email}
                onChange={(e) => setDetails({...details, email: e.target.value})}/>
            <input 
                name="password"                 
                type="password"
                required={true}
                value={details.password}
                onChange={(e) => setDetails({...details, password: e.target.value})}/>
            <input type="submit" />
        </form>
    </div>  
  )
}
