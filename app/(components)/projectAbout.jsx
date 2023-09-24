import Image from "next/image"
import AppearingDiv from './apperingDiv'

export default function projectAbout() {
  const hidden = 'opacity-0 transition-all duration-300 blur' //'opacity-0  blur transition-all duration-1000'
  const show = 'opacity-100 '//'opacity-100 blur-none transform'

  return (
    <div className="px-8 py-20 md:px-8 text-white lg:px-20 lg:py-28 lg:flex lg:gap-20">
        <AppearingDiv />
        <Image src="/images/woman-with-light-blue.jpg" height={200} width={400} className="rounded hidden lg:block"/>
    </div>
  )
}
