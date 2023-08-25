import NavBar from "./(components)/NavBar"
import Footer from "./(components)/Footer"
import CircleDiv from "./(components)/startingPage/circleDiv"

export default function page() {
  return (
    <>
        <NavBar page='startPage'/>
        <div className='heading' style={{display: 'inline'}}>
          <h3 className="text-3xl font-bold underline">Looking for a place to test your trading skills.</h3>
          <p className="text-3xl font-bold underline">*App name* has got you coveered.</p>
        </div>
        <div>
          *App name* is a trading simulator app that enables you 
          to try and own your trading skills without the risk of
          loosing your real money. 
        </div>
        <div className=' websiteAdvantages'>
          <CircleDiv imageLink='#'>Efficient</CircleDiv>
          <CircleDiv imageLink='#'>Reduced Risk</CircleDiv>
          <CircleDiv imageLink='#'>Real-time</CircleDiv>
          <CircleDiv imageLink='#'>100% accurate</CircleDiv>
        </div>
        <Footer/>
    </>
  )
}
