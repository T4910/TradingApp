'use client'
import { experimental_useFormStatus as useFormStatus } from 'react'
import { redirect } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function submitBTN() {
    const {loading} = useFormStatus()
    const emailConfirmationRegex = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])"


    async function login(data){
        const email = data.get('email')
        const password = data.get('password')

        let d, {a, b} = {a: 'b', b: 'a'}
        console.log(d,a,b)
    
        // not empty validation
        if(!email || !password) return { message: 'Empty credentials'}  

        // email validation
        if (!email.match(emailConfirmationRegex)) return {message: 'Validate email'}

        
        let {ok: isSuccessful, status, error} = await signIn('credentials', { email: email, password: password, redirect: false})
        if(isSuccessful) redirect(`/dashboard`)

        if(status == 401) return { message: 'Invalid Email or Password'} 

    }


    return (
        <button disabled={loading} formAction={login} className='bg-secondary w-[40vw] md:w-1/2 m-auto p-2 px-4 rounded'>{loading ? 'Submit' : '...'}</button>
    )
}
