import AdvScroll from "./advScroll"

export default function advantages() {
  return (
    <div className='py-20 md:py-12'>
        <div className="absolute w-full -z-10 h-40">
          <div className="absolute opacity-10 blur-md top-0 right-0 w-0 h-0 border-l-[150px] border-b-[250px] border-l-transparent border-b-primary border-r-transparent"></div>
          <div className="absolute opacity-10 blur-md top-20 right-0 w-0 h-0 border-l-[200px] border-b-[300px] border-l-transparent border-b-primary border-r-transparent"></div>
        </div>
        <h3 className='px-4 mb-4 font-bold text-center text-lg md:px-8'>Why use us?</h3>
        <AdvScroll />
    </div>
  )
}
