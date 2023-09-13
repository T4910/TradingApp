import Showfeatures from "./displayFeatures"

export default function features() {
  return (
    <div className="p-4 py-12 pt-10 border-b border-gray-5 bg-blue-950">
        <h3 className="text-2xl mb-6 font-semibold">Features</h3>
        <div className="">
          <Showfeatures src='/images/stock-image-with-pen.jpg'>
              <b className="block">Real-Time Market Data</b> 
              Stay informed with up-to-the-minute market data, including 
              live price quotes, charts, and financial news. Gain valuable 
              insights into market trends and make data-driven decisions.
          </Showfeatures>
          <Showfeatures src='/images/glasss.jpg'>
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
          <Showfeatures src='/images/istockphoto-1031313364-612x612.jpg'>
              <b className="block">Risk-Free Learning</b> 
              Enjoy the thrill of trading without the fear of losing real money. 
              Our simulator provides a safe environment for users of all experience 
              levels to practice, learn, and refine their trading skills.          
          </Showfeatures>
        </div>
    </div>
  )
}
