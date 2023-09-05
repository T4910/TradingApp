import { useState } from 'react'

export default function submitBTN() {
    const [state, setState] = useState('Submit')

    return (
        <input className='bg-primary w-[32vw] m-auto mb-6 p-2 px-4' type="submit" value={state} />
    )
}
