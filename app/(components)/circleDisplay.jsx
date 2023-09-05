import Image from 'next/image'

export default function displayFeatures({src, children}) {
  return (
    <div className='mb-8 w-1/2'>
        <div className='w-10/12 aspect-square min-h-[20px] m-auto mb-1 relative'>
            <Image src={src} fill className=' rounded-full'/>
        </div>
        <p className='text-center text-xl font-normal'>{children}</p>
    </div>
  )
}
