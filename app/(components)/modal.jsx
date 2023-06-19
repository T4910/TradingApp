export default function modal({type, children}) {
  return (
    <div style={{backgroundColor: colorStyle[type]}}>{children}</div>
  )
}

const colorStyle = {
    warning: 'yellow',
    info: 'blue',
    fail: 'red'
}