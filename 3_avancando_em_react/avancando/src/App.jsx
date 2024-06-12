import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import ConditionalRender from './component/ConditionalRender'
import ListerRender from './component/ListerRender'
import ManageData from './component/ManageData'
import ShowUserName from './component/ShowUserName'
import CarDetails from './component/CarDetails'
import Fragment from './component/Fragment'
import Container from './component/Container'
import ExecuteFunction from './component/ExecuteFunction'
import Message from './component/Message'
import ChangeMessageState from './component/ChangeMessageState'

function App() {

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  //const name = "Joaquim"
  const [username] = useState("Maria")
  const cars = [
    {id:1, brand: "Ferrari", color: "amarelo", newCar: true, km: 0},
    {id:2, brand: "Kia", color: "branco", newCar: false, km: 33550},
    {id:3, brand: "Renault", color: "verde", newCar: false, km: 15470}
  ]

  function showMessage () {
    console.log("evento do componente pai!")
  }

  return (
    <>
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListerRender />
      <ConditionalRender />
      { /* props */ }
      <ShowUserName name={username} />
      { /* destructuring */ }
      <CarDetails brand="VW" km={100000} color="azul" newCar={false}/>
      { /* Reaproveitando componentes */ }
      <CarDetails brand="Ford" km={0} color="vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="branco" newCar={false}/>
      { /* loops em arrays de objetos */ }
      {cars.map((car) => (
        <CarDetails
        key={car.id} 
        brand={car.brand}
        color={car.color} 
        newCar={car.newCar} 
        km={car.km}/>
      ))}
      {/* Fragment */}
      <Fragment />
      { /*children */ }
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <p>testando container</p>
      </Container>
      { /* executar função*/ }
      <ExecuteFunction myFunction={showMessage}/>
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </>
  )
}

export default App
