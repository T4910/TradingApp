'use client'
import { useInView } from "react-intersection-observer"


export default function apperingDiv() {
  const {ref: divRef, inView} = useInView({ threshold: 0.4 })

  
  return (
    <div ref={divRef} className={`${inView ? 'opacity-100' : 'opacity-0 blur'} transition-all duration-300`}>
          <h3 className=" mb-2 text-center text-lg font-bold lg:mb-8">What are we all about? </h3>
          <p className="text-center">
            Trade Up is a web-based platform designed to provide users with a risk-free
            environment to hone theri trading skills and explore the financial markets without
            using real money.  
          </p>
        </div>
  )
}
