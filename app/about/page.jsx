import EmailContact from '../(components)/emailContact'
import useAlertPopup from '../(components)/hooks/alertPopup'

export default function page() {
    const popup = useAlertPopup()
  return (
    <div>
        <p>Hey, I'm Emmanuel. The cretor of this website</p>
        <p>
            I am currently a student with a passion to help people in any way by creating application and outreach
            to people who are in need from the money I make.
        </p>
        <p>If you ever want to contact me you can use the following links below</p>
        {/* links in icons */}
        <p>Or send an email</p>

        <EmailContact />
    </div>
  )
}
