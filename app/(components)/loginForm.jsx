import Inputs from './inputs'
import Others from './otherLogins'
import Link from 'next/link'
// import { login } from './server/login'
import Submit from './submitBTN'



export default async function loginForm() {

    {/* <Flash {...flash} setData={setFlash}/> */}
    // const [flash, setFlash] = useState({isShown: false})

    return (
        <form className="flex flex-col flex-grow">
            {/* <Inputs /> */}                
            {/* <Submit /> */}
            <div className='flex flex-col mb-8 text-black'>
                <input name="email" type="email" placeholder="Email" autoComplete='true' className=' bg-gray-5 w-[72vw] md:w-2/3 p-2 px-4 m-auto mb-4 rounded'/>
                <input name="password" type="password" placeholder="Password" autoComplete='true' className='bg-gray-5 w-[72vw] md:w-2/3 p-2 px-4 m-auto mb-4 rounded'/>
                {/* <input type="submit" value={state} className='bg-secondary w-[40vw] md:w-1/2 m-auto p-2 px-4 rounded'/> */}
                <Submit/>
            </div>
            <hr className="m-auto my-0 w-3/4"/>
            <Others />
        </form>
  )
}
