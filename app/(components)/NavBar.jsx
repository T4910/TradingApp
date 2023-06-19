import Link from 'next/link'

export default function NavBar() {
  return (
    <div style={{backgroundColor: '#FAFAFA'}}>
        <ul>
            <li>Logo</li>
            <li><Link href="/signings/login">Sign in</Link></li>
            <li><Link href="/signings/register">Sign up</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </div>
  )
}
