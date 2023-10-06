import Roles from './roles'
import Contacts from './contsForHero'

export default function frontPage() {
  return (
    <div className='h-[100dvh] py-auto grid place-content-start'>
        <p>Hey there,</p>
        <p>I'm <span>Emmanuel Taiwo</span>, a</p>
        <Roles />
        <Contacts />
    </div>
  )
}
