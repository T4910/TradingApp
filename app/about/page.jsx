// import NavBar from '../(components)/NavBar'
// import Footer from '../(components)/Footer'
// import EmailContact from '../(components)/emailContact'
import Link from 'next/link'


export default function page() {
  return (
    <div className='grid place-items-center h-screen w-screen'>
      <div>
        <p className='text-center'>/about</p>
        <p className='font-bold text-5xl mb-4'>Coming soon!</p>
        <p className='text-center'>Please proceed to <Link href='/' className='font-bold text-secondary underline underline-offset-1'>front page</Link></p>
      </div>
    </div>
  )
}

/* <div className='mt-10 pt-10'>
      <NavBar />
      <div>
          <p>Hey, I'm Emmanuel. The cretor of this website</p>
          <p>
              I am currently a student with a passion to help people in any way by creating application and outreach
              to people who are in need from the money I make.
          </p>
          <p>If you ever want to contact me you can use the following links below</p>

          <p>Or send an email</p>

          <EmailContact />
          <Footer />
      </div>
    </div> */