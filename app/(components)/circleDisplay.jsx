import Image from 'next/image'

export default function displayFeatures({colour, src, children}) {
  return (
    <div className='mb-8 w-4/12 flex flex-col gap-1'>
        <div className={`${colour} aspect-square min-h-[15vh] min-w-[30vw] m-auto relative border-2 rounded-full md:min-h-[10vh] md:min-w-[20vw]`}>
            <Image src={src} fill className="rounded-full"/>
        </div>
        <p className='text-center text-xl font-medium'>{children}</p>
    </div>
  )
}
