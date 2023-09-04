import NavBar from "./(components)/NavBar"
import Footer from "./(components)/Footer"
import Starter from "./(components)/starter"
import WebAbout from "./(components)/projectAbout"
import Features from "./(components)/features"
import WhyUseUs from "./(components)/advantages"
import AboutDev from "./(components)/aboutdev"

export default function page() {
  return (
    <>
        <NavBar page='startPage'/>
        <Starter />
        <WebAbout />
        <Features />
        <WhyUseUs />
        <AboutDev />
        <Footer/>
    </>
  )
}
