import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function regSubmitBTN({flash}) {
    const { pending } = useFormStatus()

    async function register(data){
        const username = data.get('username')
        const email = data.get('email')
        const password = data.get('password')

        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; //email validation TODO: ADD verification
        const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


        if(!username || !email || !password) return flash({ message: 'No Empty Fields' })

        if(!passwordRegex.test(password)) return flash({ message: 'Password must have at least one uppercase, one lowercase, a numerical and  a special character' })
        if(!emailRegex.test(email)) return flash({ message: 'Invalid email' })


        // check for email in database
        try{
            let res = await fetch('/api/reguser', { //signing/DBemailChecking', {
                method: 'POST',
                body: JSON.stringify({email: email, username: username, check: true})
            })
            let isThereAnotherEmail = await res.json()
    
            if(isThereAnotherEmail) return flash({ message: 'Email has already been used' })
        } catch (e) { return flash({ message: 'Problem in server', code: 'err' }) }

        try{
        // create User
            let res = await fetch('/api/reguser', { //signing/register',{
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({username: username, email: email, password: password})
            })
            if(res.ok) return flash({ message: 'Account created', code: 'good' })
        } catch(e) {return flash({ message: 'Problem in server', code: 'err' }) }

        
        // TODO: identifier for if user is a newUser should be added (in Next-Auth documentation)
        await signIn('credentials', { email: email, password: password, redirect: false })
        redirect('/dashboard')
    }

    return (
        <button aria-disabled={pending} disabled={pending} formAction={register} className='bg-secondary text-white w-[40vw] md:w-1/2 m-auto p-2 px-4 rounded'>
            {!pending ? 'Submit' : '...'}
        </button>
    )
}


