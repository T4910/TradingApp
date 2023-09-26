

export default function Flash ({message, code, set}){
    let visible = message ? '' : 'hidden';
    const colorcode = {
        err: 'bg-error',
        warn: 'bg-warning',
        good: 'bg-ok',
    }

    return (                                                                 // mx-auto
        <div className={`${visible} ${colorcode[code ? code : 'warn']} flex justify-between my-4 w-[80vw] md:w-4/5 mx-8 rounded`}>
            <div className="p-4 py-2">{message}</div>
            <button className="p-4 py-2" type='button' onClick={() => set({ message: null })}>x</button>
        </div>
    )
}

