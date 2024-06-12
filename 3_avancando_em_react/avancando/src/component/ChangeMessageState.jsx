const ChangeMessageState = ({handleMessage}) => {

    const Messages = ["oi", "olá", "oi, tudo bem?"]

  return (
    <div>
        <button onClick={() => handleMessage(Messages[0])}>1</button>
        <button onClick={() => handleMessage(Messages[1])}>2</button>
        <button onClick={() => handleMessage(Messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState