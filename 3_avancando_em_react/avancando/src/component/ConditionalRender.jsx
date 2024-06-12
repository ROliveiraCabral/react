import { useState } from "react"

const ConditionalRender = () => {

    const[x] = useState(false)

    const [name, setName] = useState("matheus")

  return (
    <div>
      <h1>if e else</h1>
        <h1>Isso será exibido?</h1>
        {x && <p>se for true, sim!</p>}
        {!x && <p>agora x é falso!</p>}
        {name === "João" ? (
          <div>
            <h1>if ternário</h1>
            <p>o nome é João!</p>
          </div>
        ) : (
          <div>
            <p>nome não encontrado!</p>
          </div>
        )}
        <button onClick={()=>{setName("João")}}>clicar</button>
    </div>
  )
}

export default ConditionalRender