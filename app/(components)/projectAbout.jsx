import Image from "next/image"


export default function projectAbout() {
  return (
    <div className="px-8 py-20 md:px-8 text-white 
                    lg:px-20 lg:py-28 lg:flex lg:gap-20">
        <div>
          <h3 className=" mb-2 text-center text-lg font-bold lg:mb-8">What are we all about? </h3>
          <p className="text-center">
            Trade Up is a web-based platform designed to provide users with a risk-free
            environment to hone theri trading skills and explore the financial markets without
            using real money.  
          </p>
        </div>
        <Image src="/images/woman-with-light-blue.jpg" height={200} width={400} className="rounded hidden lg:block"/>
    </div>
  )
}
