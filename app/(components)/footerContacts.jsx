import Link from "next/link";

export default function footerContacts() {
  return (
    <div className='px-8 pt-8 '>
        <p className='mb-1'>Let's chat &#128064;&#9996;:</p>
        <p className="text-start text-primary font-medium">+000 000 000 0000</p>
        <p className="text-start text-primary font-medium">
          <a href="mailto://taiwo.the.techie@gmail.com">taiwo.the.techie@gmail.com</a>
        </p>
    </div>
  )
}
