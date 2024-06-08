const Events = () => {

const rederSomething = (x) => {
    if (x) {
        return <h1>renderizando isso!</h1>
    } else {
        return <h1>também posso renderizar isso!</h1>
    }
}

const handleMyEvent = (e) => {
    console.log(e)
    console.log("ativou o evento!")
}

  return (
    <>
        <div>
            <button onClick={handleMyEvent}>clique aqui</button>
        </div>
        <div>
            <button onClick={() => console.log("clicou!")}>clique aqui também!</button>
        </div>
        <div>
            <button onClick={() => {
                if (true) {
                    console.log("isso não deveria existir!")
                }
            }}>clique aqui por favor!</button>
        </div>
        {rederSomething(true)}
        {rederSomething(false)}
    </>
  )
}

export default Events