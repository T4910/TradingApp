'use client'
import { useState } from 'react'
import Flash from './flashBox'
import Submit from './regSubmitBTN'

// TODO: Remove Surname and put just name 

export default function registerForm() {
    const [flash, setFlash] = useState({ message: null })

    return (
        <form className='flex flex-col mb-8 text-black'>
            <Flash {...flash} set={setFlash}/>
            <input type="text" name='username' placeholder='Username' required  className='w-[72vw] p-2 px-4 m-auto mb-4 rounded md:w-2/3'/>
            <input type="email" name='email' placeholder='Email' required className='w-[72vw] p-2 px-4 m-auto mb-4 rounded md:w-2/3'/>
            <input type="password" name='password' placeholder='Password' required className='w-[72vw] p-2 px-4 m-auto mb-4 rounded md:w-2/3'/>
            <Submit flash={setFlash}/>
        </form>
  )
}