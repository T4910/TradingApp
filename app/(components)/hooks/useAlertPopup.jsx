'use client'
import {useState} from 'react'

export default function useAlertPopup(initVar) {
    if(!initVar) initVar = {
        description: 'info',
        visibility: false,
        content: ''
    }

    const [infoState, setinfoState] = useState(initVar) 
  
    const component = () => {return(
        <div style={{backgroundColor: descColor[infoState.description], display: infoState.visibility ? 'block':'none' }}>
                {initVar.children ? initVar.children : infoState.content}
                <button onClick={() => setinfoState((state) => {
                    return {...state, visibility: false}
                })}>x</button>
        </div>
    )}
  
  return [component, setinfoState]
}

const descColor = {
    info: 'blue',
    error: 'red',
    warning: 'yellow'
}
