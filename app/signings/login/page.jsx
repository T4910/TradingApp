'use client'
import {useState} from 'react'
import Modal from '../../(components)/modal'
import NavBar from "../../(components)/NavBar"
import useBasicToggle from '../../(components)/hooks/useBasicToggle'


export default function page() {
    // const [modalState, toggleModalState, forceModalState] = useBasicToggle(false)

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })

    function LOGIN(e){
        e.preventDefault()

        const {username, password} = loginDetails
        
        if((username || password) == ''){
            // forceModalState(true)
            return
        }

        console.log(loginDetails)
    }

  return (
    <div>
        <NavBar/>
        <h2>Log in</h2>
        {/* <Modal 
            type='warning' 
            style={{display: (modalState ? 'block' : 'none')}}
            onClick={toggleModalState()}>Green</Modal> */}
        <form onSubmit={LOGIN}>
            <input 
                name="username"
                type="text" 
                value={loginDetails.username}
                onChange={(e) => setLoginDetails({...loginDetails, username: e.target.value})}/>
            <input 
                name="password"                 
                type="password"
                value={loginDetails.password}
                onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})}/>
            <input type="submit" />
            <button>GOOGLE BTN tobeadded</button>
        </form>
    </div>
  )
}
