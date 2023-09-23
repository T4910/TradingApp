import Image from "next/image"


export default function projectAbout() {
  return (
    <div className="px-8 py-16 md:px-8 text-white 
                    lg:px-20 lg:py-28 lg:flex lg:gap-20">
        <div>
          <h3 className="text-3xl mb-4 font-semibold lg:mb-8">What are we all about? </h3>
          <p>
            Trade Up is a web-based platform designed to provide users with a risk-free
            environment to hone theri trading skills and explore the financial markets without
            using real money. <br /><br /> This educational tool offers a realisic rading experience, 
            allowing users to buy and sell assetss, rack theri portfolio's performance, and 
            learn about investments strategies. With access to real-time market data and a 
            user-friendly interface, this platform aims to empower individuals with the 
            knowledge and confidence needed to make infromed financial decisinos and embark on 
            their trading jorney with great expertise. 
          </p>
        </div>
        <Image src="/images/woman-with-light-blue.jpg" height={200} width={400} className="rounded hidden lg:block"/>
    </div>
  )
}
