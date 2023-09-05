
export default function inputs() {
  return (
    <div className='flex flex-col'>
        <input name="email" type="text" placeholder="Email" autoComplete 
        className='w-[65vw] p-2 px-4 m-auto mb-4'/>

        <input name="password" type="password" placeholder="Password" autoComplete 
        className='w-[65vw] p-2 px-4 m-auto mb-4'/>
    </div>
  )
}
