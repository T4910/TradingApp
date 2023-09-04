import Whys from '../(components)/circleDisplay'

export default function advantages() {
  return (
    <div className='py-6 bg-gray-75'>
        <h3 className='px-6 text-xl mb-8 font-medium'>Why use us?</h3>
        <div className='flex flex-wrap justify-evenly'>
            <Whys src='/images/3-19.jpg'>Efficient</Whys>
            <Whys src='/images/3-19.jpg'>Reduced Risk</Whys>
            <Whys src='/images/3-19.jpg'>Real-time</Whys>
            {/* <Whys src='/images/3-19.jpg'>100% accurate</Whys> */}
        </div>
    </div>
  )
}
