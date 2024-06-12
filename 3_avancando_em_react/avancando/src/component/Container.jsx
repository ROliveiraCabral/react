import { Children } from "react"

const container = ({children, myValue}) => {
  return (
    <div>
        <h2>este é o título do container</h2>
        {children}
        <p>o valor é {myValue}</p>
    </div>
  )
}

export default container