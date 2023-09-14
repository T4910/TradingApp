import Showfeatures from "./displayFeatures"
import Link from "next/link"

export default function features() {
  return (
    <div className="px-4 py-12 md:px-8 md:py-16 pt-10 border-b border-gray-5 bg-blue-950
                    lg:px-0 lg:py-16">
        <h3 className="text-3xl text-gray-5 mb-6 font-semibold lg:mb-12 lg:px-20">Features</h3>
        <div className="lg:flex lg:flex-wrap lg:justify-around lg:px-20">
          <Showfeatures src='/images/stock-image-with-pen.jpg'>
              <b className="block">Real-Time Market Data</b> 
              Stay informed with up-to-the-minute market data, including 
              live price quotes, interactive charts, and financial news. Gain valuable 
              insights into market trends and make financial data-driven decisions.
          </Showfeatures>
          <Showfeatures src='/images/glasss.jpg' invert='true'>
            <b className="block">Customizable Trading Strategies</b>
            Create and test your own trading strategies using historical data. 
            Fine-tune parameters, set stop-loss and take-profit orders, and watch 
            how your strategies perform in real market conditions
          </Showfeatures>
          <Showfeatures src='/images/dashboard-forex-market-cryptocurrency-app2.jpg'>
            <b className="block">Virtual Portfolio Management</b>
            Seamlessly manage a virtual investment portfolio with a wide range of assets, 
            from stocks and cryptocurrencies to commodities and forex. Experiment with 
            diverse trading strategies without risking real capital.
          </Showfeatures>
          <Showfeatures src='/images/istockphoto-1031313364-612x612.jpg' invert='true'>
              <b className="block">Risk-Free Learning</b> 
              Enjoy the thrill of trading without the fear of losing real money. 
              Our simulator provides a safe environment for users of all experience 
              levels to practice, learn, and refine their trading skills.          
          </Showfeatures>
          <div className={`p-0 w-[25vw] shadow-md rounded-md mb-16 border-4 border-dashed border-black grid place-items-center`}>
            <p className='text-2xl font-bold px-2'>
              And much more <br />
              Check them out <Link href='/signings/login' className="underline">here</Link>
            </p>
          </div> 
        </div>
    </div>
  )
}
