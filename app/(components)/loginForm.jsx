import Others from './otherLogins'
import Inputs from './inputs'


export default async function loginForm() {
    return (
        <form className="flex flex-col flex-grow">
            <div className='flex flex-col mb-8 text-black'>
                <Inputs />
            </div>
            <hr className="m-auto my-0 w-3/4"/>
            <Others />
        </form>
  )
}
