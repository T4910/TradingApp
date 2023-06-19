import Image from 'next/image'

export default function circleDiv({imageLink: link, children}) {
  return (
    <div style={circleStyle}>
        <Image 
          src='/'
          width={200}
          height={200}/>
        {children}
        </div>
  )
}


const circleStyle = {
    fontStyle: 'sans-serif',
    fontWeight: 'bold',
    backgroundColor: '#F1F1F1', 
    display: 'inline'
}