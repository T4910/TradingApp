'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'

export default function displayFeatures({src, children, invert}) {
  return ( 
    <div className='bg-gray-75 border border-greens-25 shadow-md rounded-md p-2
                      md:p-0 md:mb-16 md:flex md:flex-row-reverse md:items-center
                      lg:w-[25vw] lg:flex-col '>
        <div className='relative w-auto h-44 md:w-[35%] md:h-52 lg:w-full lg:h-72'><Image src={src} fill className='rounded md:rounded-none md:rounded-r-md'/></div>
        <p className='mb-2 mt-4 md:m-0 md:w-[65%] md:p-4 md:inline-block lg:min-h-max lg:w-full'>{children}</p>
    </div> 
  )
}


{/* <div className={`p-0 flex w-[25vw] flex-col items-center bg-gray-5 shadow-md rounded-md mb-16`}>
      <div className='relative aspect-auto w-full h-72'><Image src={src} fill className=' rounded-t-md'/></div>
      <p className=' min-h-max p-4'>{children}</p>
    </div> */}