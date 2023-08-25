export default function Footer({auth}) {
  return (
    <div style={{backgroundColor:'grey'}}>
        <ul className="pages">
          <li>About</li>
          {auth && <li>Sign in</li>}
          <li>Sign out</li>
        </ul>
        <ul className="links">
            <li>Git repo</li>
            <li>LinkedIn</li>
            <li>Phone No.</li>
        </ul>
    </div>
  )
}
