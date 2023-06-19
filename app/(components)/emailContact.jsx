export default function emailContact() {
    let nameBox = useRef()
    let emailBox = useRef()
    let messageBox = useRef()

    function emailMessage(e){
        e.preventDefault()

        // 

        // message email
    }

  return (
    <div>
        <form onSubmit={(e) => emailMessage(e)}>
            <input type="text" name="name" ref={nameBox} required={true}/>
            <input type="email" name="email" ref={emailBox} required={true}/>
            <input type="container" name="message" ref={messageBox} required={true}/>
        </form>
    </div>
  )
}
