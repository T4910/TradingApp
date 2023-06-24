'use client'
import {useRef, useState} from 'react'
import InfoField from './infoField' 

export default function emailContact() {
    let nameBox = useRef()
    let emailBox = useRef()
    let messageBox = useRef()
    const [{description, visibility, content}, setinfoFieldContent] = useState({
      description: 'info',
      visibility: false,
      content: '...'
  })

    function emailMessage(e){
        e.preventDefault()
        // message email

        const letter = {
          name: nameBox.current.value,
          email: emailBox.current.value,
          message: messageBox.current.value
        }

        if(letter.name === '' || letter.email === '' || letter.message === '') return setinfoFieldContent({
          description: 'error',
          visibility: true,
          content: 'Missing fields'
        })

        console.log(letter)
    }

  return (
    <div>
        <InfoField description={description} visibility={visibility} settingFunction={setinfoFieldContent}>{content}</InfoField>
        <form onSubmit={(e) => emailMessage(e)}>
          <label htmlFor="name">Fullname: </label>
            <input type="text" name="name" ref={nameBox} required={true}/>
          <label htmlFor="email">Email:</label>
            <input type="email" name="email" ref={emailBox} required={true}/>
          <label htmlFor="message">Messege</label>
            <textarea ref={messageBox} name="message" id="message" cols="30" rows="10" required={true} placeholder={'Type your message here...'}></textarea>
          <input type="submit" value="Send" />
        </form>
    </div>
  )
}
