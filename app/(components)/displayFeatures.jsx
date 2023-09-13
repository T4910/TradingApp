import Image from 'next/image'

export default function displayFeatures({src, children}) {
  return (
    <div className='bg-gray-5 shadow-md p-2 rounded-md mb-12'>
      <div className='relative w-auto h-40'><Image src={src} fill className='rounded'/></div>
      <p className='mb-2 mt-4'>{children}</p>
    </div>
  )
}
