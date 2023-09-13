import Image from 'next/image'

export default function displayFeatures({src, children, color}) {
  return (
    <div className='mb-8 w-4/12 flex flex-col gap-1'>
        <div className={`aspect-square min-h-[15vh] min-w-[30vw] m-auto relative bg-${color}-200 border-2 rounded-full`}>
            <Image src={src} fill className="rounded-full"/>
        </div>
        <p className='text-center text-xl font-medium'>{children}</p>
    </div>
  )
}
