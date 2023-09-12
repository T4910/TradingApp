import JoinNow from '../(components)/joinnowbtn'

export default function starter() {

  return (
    <div className='  flex h- flex-col mt-12 w-auto px-6 py-[24vh] bg-stocks backdrop-blur-lg bg-cover text-gray-10'>
        <h3 className="text-5xl font-bold mb-8">
            TradeUp
        </h3>
        <p className="text-3xl mb-16">
            Experience the real-time trading without having to take real-life <u>risks</u>
        </p>
        <JoinNow />
    </div>
  )
}
