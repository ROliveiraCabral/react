import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent/MyComponent";
import Title from "./components/Title/Title";

function App() {
  const n = 15;
  const [name] = useState("Rodrigo");
  const redTitle = true;
  
  return (
    <>
      {/* css global */}
      <h1>React com CSS</h1>
      <MyComponent />
      {/* css de componente */}
      <p>Este parágrafo é do App.jsx</p>
      {/* css inline */}
      <p
        style={{ color: "white", padding: "25px", borderTop: "2px solid red" }}
      >
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={name === "Rodrigo" ? { color: "green", background: "#000" } : null}>
        Teste nome 
      </h2>
      <h2 style={name === "João" ? { color: "green", background: "#000" } : null}>
        Teste nome
      </h2>
      {/* classe dinâmica */}
      <h2 className={ redTitle ? "red-title" : "title" }>Este título vai ter classe dinâmica</h2>
      {/* classe modules */}
      <Title />
    </>
  );
}

export default App;
