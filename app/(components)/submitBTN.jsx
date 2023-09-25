'use client'
import { useState } from 'react'

export default function submitBTN() {
    const [state, setState] = useState('Submit')

    return (
        <input className='bg-secondary w-[40vw] md:w-1/2 m-auto p-2 px-4 rounded' type="submit" onClick={() => setState((state) => `${state} o`)} value={state} />
    )
}
