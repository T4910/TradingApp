import Showfeatures from "./displayFeatures"
import Muchmore from "./muchmore"

export default function features() {
  return (
    <div className="px-8 md:px-8 md:py-16
                    lg:px-0 lg:py-16">
        <h3 className="text-lg text-center mb-4 font-bold lg:mb-12 lg:px-20">Features</h3>
        <div className="flex flex-col gap-12 lg:flex-wrap lg:justify-evenly lg:px-20">
          <Showfeatures src='/images/stock-image-with-pen.jpg'>
              <p className="block font-extrabold ">Real-Time Market Data</p> 
              Stay informed with up-to-the-minute market data, including 
              live price quotes, interactive charts, and financial news. Gain valuable 
              insights into market trends and make financial data-driven decisions.
          </Showfeatures>
          <Showfeatures src='/images/glasss.jpg' invert='true'>
            <p className="block font-extrabold ">Customizable Trading Strategies</p>
            Create and test your own trading strategies using historical data. 
            Fine-tune parameters, set stop-loss and take-profit orders, and watch 
            how your strategies perform in real market conditions
          </Showfeatures>
          <Showfeatures src='/images/dashboard-forex-market-cryptocurrency-app2.jpg'>
            <p className="block font-extrabold ">Virtual Portfolio Management</p>
            Seamlessly manage a virtual investment portfolio with a wide range of assets, 
            from stocks and cryptocurrencies to commodities and forex. Experiment with 
            diverse trading strategies without risking real capital.
          </Showfeatures>
          <Showfeatures src='/images/istockphoto-1031313364-612x612.jpg' invert='true'>
              <p className="block font-extrabold ">Risk-Free Learning</p> 
              Enjoy the thrill of trading without the fear of losing real money. 
              Our simulator provides a safe environment for users of all experience 
              levels to practice, learn, and refine their trading skills.          
          </Showfeatures>
          <Muchmore />
        </div>
    </div>
  )
}
