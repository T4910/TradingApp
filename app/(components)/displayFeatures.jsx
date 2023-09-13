import Image from 'next/image'

export default function displayFeatures({src, children, invert}) {
  let reverse = invert ? 'flex-row-reverse' : ''
  return (
    <div className='bg-gray-5 shadow-md rounded-md p-2 mb-12 
                    md:p-0 md:mb-16 md:flex md:flex-row-reverse md:items-center'>
      <div className='relative w-auto h-44 md:w-[35%] md:h-52'><Image src={src} fill className='rounded md:rounded-none md:rounded-r'/></div>
      <p className='mb-2 mt-4 md:m-0 md:w-[65%] md:p-4 md:inline-block'>{children}</p>
    </div>
  )
}


{/* <div className={`p-0 flex flex-row-reverse items-center bg-gray-5 shadow-md rounded-md mb-16`}>
  <div className='relative aspect-auto  w-[35%] h-48'><Image src={src} fill className=' rounded-r'/></div>
  <p className='w-[65%] p-4 inline-block'>{children}</p>
</div> */}