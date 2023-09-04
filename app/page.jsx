import NavBar from "./(components)/NavBar"
import Footer from "./(components)/Footer"
import CircleDiv from "./(components)/startingPage/circleDiv"
import Starter from "./(components)/starter"

export default function page() {
  return (
    <>
        <NavBar page='startPage'/>
        <Starter />
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
