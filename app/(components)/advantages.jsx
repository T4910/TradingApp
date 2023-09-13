import Whys from '../(components)/circleDisplay'

export default function advantages() {
  return (
    <div className='py-8 border-b-2 md:py-12'>
        <h3 className='px-4 text-2xl mb-8 font-semibold 
                        md:px-8'>Why use us?</h3>
        <div className='flex flex-wrap md:flex-nowrap justify-evenly gap-1'>
            <Whys colour='bg-pink-200' src='/images/real-time-dataedited-removebg-preview.png'>Real-time Data</Whys>
            <Whys colour='bg-green-200' src='/images/gain-exp-org.png'>Gain Experience</Whys>
            <Whys colour='bg-blue-200' src='/images/ruler-icon-18.png'>Advanced tooling</Whys>
            <Whys colour='bg-orange-200' src='/images/learn-removebg-preview.png'>Wholesome learning</Whys>
        </div>
    </div>
  )
}
