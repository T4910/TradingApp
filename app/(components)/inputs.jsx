import Submit from "./submitBTN"

export default function inputs() {
  return (
    <div className='flex flex-col mb-8'>
        <input name="email" type="email" placeholder="Email" autoComplete 
        className=' bg-gray-5 w-[72vw] p-2 px-4 m-auto mb-4 rounded'/>

        <input name="password" type="password" placeholder="Password" autoComplete 
        className='bg-gray-5 w-[72vw] p-2 px-4 m-auto mb-4 rounded'/>

        <Submit />
    </div>
  )
}
