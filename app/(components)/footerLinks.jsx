import Link from 'next/link'
import {SiGithub, SiLinkedin, SiInstagram, SiFacebook, SiTelegram, SiWhatsapp} from "react-icons/si"


export default function footerLinks() {

  return (
    <div className='flex justify-evenly col-span-2 p-2 py-2 text-2xl'>
        <Link href='/' className='p-4'><SiFacebook/></Link>
        <Link href='/' className='p-4'><SiInstagram/></Link>
        <Link href='/' className='p-4'><SiGithub/></Link>
        <Link href='/' className='p-4'><SiLinkedin/></Link>
        {/* <Link href='/' className='p-4'><SiTelegram/></Link> */}
        {/* <Link href='/' className='p-4'><SiWhatsapp/></Link>   */}
    </div>
  )
}
