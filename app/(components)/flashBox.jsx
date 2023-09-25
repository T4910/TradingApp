const Component = ({children, isShown, status, setData}) => {
    const colorstatus = {
        info: 'bg-blue',
        error: 'bg-error',
        warning: 'bg-warning',
        good: 'bg-ok',
        true: '',
        false: 'hidden'
    }

    let visible = colorstatus[isShown]

    return (
        <div className={`flex justify-between my-4 mx-auto w-[80vw] md:w-4/5 ${visible} mx-8 rounded ${colorstatus[status]}`}>
            <div className="p-4 py-2">{children}</div>
            <button className="p-4 py-2" type='button' onClick={() => setData((data) => {
                console.log('j: ', data)
                return {...data, isShown: false}
            })}>x</button>
        </div>
    )
}


export default Component