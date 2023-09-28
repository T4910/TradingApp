'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { redirect } from 'next/navigation'
import { signIn } from 'next-auth/react'
  
export default function submitBTN({flash}) {
    const { pending } = useFormStatus()

    async function login(data){
        const emailConfirmationRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        const email = data.get('email')
        const password = data.get('password')
      
        // not empty validation
        if(!email || !password) return flash({ message: 'Empty credentials'})  
      
        // email validation
        if(/@/.test(email)) if (!emailConfirmationRegex.test(email)) return flash({message: 'Invalid email'})
              

        let {ok: isSuccessful, status, error} = await signIn('credentials', { email: email, password: password, redirect: false})
        if(isSuccessful) redirect(`/dashboard`)
      

        if(status == 401) return flash({ message: 'Invalid Email or Password'}) 
        else {
            return flash({message: 'Server Error', code: 'err'})
        }
    }

    return (
        <button aria-disabled={pending} disabled={pending} formAction={login} className='bg-secondary text-white w-[40vw] md:w-1/2 m-auto p-2 px-4 rounded'>{!pending ? 'Submit' : '...'}</button>
    )
}
