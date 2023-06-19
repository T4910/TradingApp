export default function infoField({children, visibility, description, settingFunction}) {

    return (
        <div style={{backgroundColor: descColor[description], display: visibility ? 'block':'none' }}>
            {children}
            <button onClick={() => settingFunction((state) => {
                return {...state, visibility: false}
            })}>x</button>
        </div>
    )
}

const descColor = {
    info: 'blue',
    error: 'red',
    warning: 'yellow'
}