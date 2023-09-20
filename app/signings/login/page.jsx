import NavBar from "../../(components)/NavBar"
import Form from '../../(components)/loginForm'
import Footer from '../../(components)/Footer'

export default function page() {
    
  return (
    <>
      <div className="bg-black md:max-h-screen md:py-40">
          <NavBar/>
          <Form />
      </div>
      <Footer />
    </>
  )
}
