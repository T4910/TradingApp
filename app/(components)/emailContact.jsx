import Flash from '../(components)/flashBox'
import Submit from './submitBTN'

export default function emailContact() {

    async function sendEmail(form){
      'use server'
      const name = form.get('name')
      const email = form.get('email')
    }

    return (
      <form action={sendEmail}
          className='rounded flex flex-col m-2 px-4 pt-8 pb-4'>
        <input required type="text" name="name" placeholder='Name' className='mb-4' />
        <input required type="email" name="email" placeholder='Email' className='mb-4' />
        <textarea id="message" cols="30" rows="10" required placeholder='Type your message here...'
          className='mb-4'></textarea>
        <Submit />
      </form>
    )
}
