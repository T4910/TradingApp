import Image from 'next/image'

export default function displayFeatures({src, children}) {
  return (
    <div>
      <div className='relative w-auto h-24'><Image src={src} fill className='rounded'/></div>
        <p>{children}</p>
    </div>
  )
}
