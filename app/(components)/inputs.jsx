'use client'
import Submit from "./submitBTN"
import Flash from './flashBox'
import { useState } from 'react'


export default function inputs() {
  const [flash, setFlash] = useState({ message: null })
  return (
    <>
      <Flash {...flash} set={setFlash}/>
      <input name="email" type="text" placeholder="Username or Email" required autoComplete='true' className=' bg-gray-5 w-[72vw] md:w-2/3 p-2 px-4 m-auto mb-4 rounded'/>
      <input name="password" type="password" placeholder="Password" required autoComplete='true' className='bg-gray-5 w-[72vw] md:w-2/3 p-2 px-4 m-auto mb-4 rounded'/>
      <Submit flash={setFlash}/>
    </>
  )
}
