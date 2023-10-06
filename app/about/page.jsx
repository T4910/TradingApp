import NavBar from '../(components)/NavBar'
import Footer from '../(components)/Footer'
import Email from '../(components)/emailContact'
import About from '../(components)/devDesc'
import Tools from '../(components)/myTools'
import Hero from '../(components)/frontPage'
import Works from '../(components)/myWorks'
import ContactME from '../(components)/contactMe'


export default function page() {
    return (
      <div>
        <NavBar links={true}/> 
        <Hero />
        <About />
        <Tools />
        <Works />
        <ContactME />
        <Email />
        <Footer />
      </div>
    )
}
