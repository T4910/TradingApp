import JoinNow from '../(components)/joinnowbtn'

export default function starter() {

  return (
    <div className='bg-black bg-cover h-[100dvh] grid items-center'>
      <div className='z-10 grid items-center h-full py-40 lg:mt-0 w-auto px-6 md:px-20 text-gray-10 backdrop-blur bg-opacity-25'>
        <div className="flex flex-col h-min">
          <h3 className="text-4xl font-bold mb-4 lg:text-8xl text-center">
              TradeUp
          </h3>
          <p className="text-xl mb-16 md:w-2/3 md:mx-auto text-center">
              Experience real-time trading without having to take real-life risks
          </p>
          <JoinNow />
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full overflow-hidden h-[90dvh]'>
        <div className="custom-pulse absolute bottom-0 w-0 h-0 border-x-[250vw] -left-[200vw] border-b-[70vh] border-l-transparent border-b-primary border-r-transparent"></div>
        <div className="custom-pulse absolute bottom-0 w-0 h-0 border-x-[250vw] -left-[200vw] border-b-[55vh] border-l-transparent border-b-primary border-r-transparent"></div>
        <div className="custom-pulse absolute bottom-0 w-0 h-0 border-x-[250vw] -left-[200vw] border-b-[40vh] border-l-transparent border-b-primary border-r-transparent"></div>
      </div>
    </div>
  )
}

{/* <div className='absolute bottom-0 left-0 w-full overflow-hidden h-[90dvh]'>
<div className="absolute bottom-0 -left-[40vw] h-[77dvh] w-[180vw] rounded-t-full opacity-40 bg-primary"></div>
<div className="absolute bottom-0 -left-[30vw] h-[55dvh] w-[160vw] rounded-t-full opacity-20 bg-primary"></div>
<div className="absolute bottom-0 -left-[15vw] h-[35dvh] w-[130vw] rounded-t-full opacity-20 bg-primary"></div>
</div> */}
