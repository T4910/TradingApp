import NavBar from "../../(components)/NavBar"
import Form from '../../(components)/loginForm'
import Footer from '../../(components)/Footer'

export default function page() {
    
  return (
    <div className="bg-gray-50 mt-10 pt-10">
        <NavBar/>
        <h1 className='text-center font-semibold text-2xl mb-4'>Log in</h1>
        <Form />
        <Footer />
    </div>
  )
}
