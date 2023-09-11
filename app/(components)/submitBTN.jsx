'use client'
import { useState } from 'react'

export default function submitBTN() {
    const [state, setState] = useState('Submit')

    return (
        <input className='bg-primary w-[40vw] m-auto p-2 px-4' type="submit" onClick={() => setState((state) => `${state} o`)} value={state} />
    )
}
