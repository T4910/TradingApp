import Link from "next/link"


export default function muchmore() {

    return ( 
        <div className='hidden lg:grid p-0 w-[25vw] shadow-md rounded-md mb-16 border-4 border-dashed border-black place-items-center'>
            <p className='text-2xl font-bold px-2'>
                And much more <br />
                Check them out <Link href='/signings/login' className="underline text-secondary">here</Link>
            </p>
        </div>
    )
}
