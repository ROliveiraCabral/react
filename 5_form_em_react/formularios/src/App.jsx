import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
    <h2>Formulários</h2>
    <MyForm user={{name: "Josias", email: "josias@gmail.com", bio: "sou advogado", role: "Administrador"}}/>
    </>
  )
}

export default App
