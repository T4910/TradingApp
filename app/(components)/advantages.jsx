import Whys from '../(components)/circleDisplay'

// Real-time data {trade icon like default image}
// Gain Experience {a plant growing or a light bulb or arrow going up either with a person}
// Wholesome learning {light bulb with book}
// Advnaced tooling {a ruler}

export default function advantages() {
  return (
    <div className='py-8 border-b-2'>
        <h3 className='px-6 text-2xl mb-8 font-semibold'>Why use us?</h3>
        <div className='flex flex-wrap justify-evenly gap-1'>
            <Whys color='pink' src='/images/real-time-dataedited-removebg-preview.png'>Real-time Data</Whys>
            <Whys color='green' src='/images/gain-exp-org.png'>Gain Experience</Whys>
            <Whys color='blue' src='/images/ruler-icon-18.png'>Advanced tooling</Whys>
            <Whys color='orange' src='/images/learn-removebg-preview.png'>Wholesome learning</Whys>
        </div>
    </div>
  )
}
