import JoinNow from '../(components)/joinnowbtn'

export default function starter() {

  return (
    <div className=' bg-gray-50 flex flex-col mt-12 w-auto px-8 pb-16 pt-20'>
        <h3 className="text-5xl font-bold mb-5">
            TradeUp
        </h3>
        <p className="text-3xl mb-12">
            Experience the real-time trading without having to take real-life <u>risks</u>
        </p>
        <JoinNow />
    </div>
  )
}
