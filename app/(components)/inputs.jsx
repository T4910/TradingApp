import Submit from "./submitBTN"

export default function inputs() {
  return (
    <div className='flex flex-col mb-6'>
        <input name="email" type="email" placeholder="Email" autoComplete 
        className='w-[72vw] p-2 px-4 m-auto mb-4'/>

        <input name="password" type="password" placeholder="Password" autoComplete 
        className='w-[72vw] p-2 px-4 m-auto mb-4'/>

        <Submit />
    </div>
  )
}
