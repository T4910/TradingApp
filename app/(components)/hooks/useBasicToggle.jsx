'use client'
import {useState} from 'react'

export default function useBasicToggle (bool){
    const [state, setState] = useState(bool)

    function toggle(state){
      setState(currentVal => typeof state === 'boolean' ? state : !currentVal)
    }

  return  [state, toggle, setState]
}
