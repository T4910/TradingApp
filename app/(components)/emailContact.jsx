'use client'
import Flash from '../(components)/flashBox'
import Submit from './submitBTN'
import {useState} from 'react'

export default function emailContact() {
  const [flash, setFlash] = useState({isShown: false})

    function emailMessage(e){
        e.preventDefault()
        
        // message email
        const {name, email, message} = {
          name: e.target.childNodes[0].value,
          email: e.target.childNodes[1].value,
          message: e.target.childNodes[2].value
        }

        if((name || email || message) == '') return setFlash({
          isShown: true,
          status: 'warning',
          children: 'Please enter valid inputs'
        })


        if (success){
          // set inputs to nothing 
          e.target.childNodes[0].value = ''
          e.target.childNodes[1].value = ''
          e.target.childNodes[2].value = ''

          return setFlash({isShown: true, status: 'ok', children: 'Email sent successfully'})
        } 

}

    return (
      <form onSubmit={(e) => emailMessage(e)}
          className='rounded bg-gray-25 flex flex-col m-2 px-4 pt-8 pb-4'>
        <input type="text" required placeholder='Name'
          className='mb-4'/>
        <input type="email" required placeholder='Email'
          className='mb-4'/>
        <textarea id="message" cols="30" rows="10" required placeholder='Type your message here...'
          className='mb-4'></textarea>
        <Submit />
      </form>
    )
}
