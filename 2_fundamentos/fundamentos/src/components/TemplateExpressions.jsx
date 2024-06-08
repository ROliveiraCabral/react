import MyComponent from "./MyComponent";

const TemplateExpressions = () => {

    const name = "Rodrigo";

    const data = {
        age: 41,
        job: "developer"
    }

  return (
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>você trabalha como {data.job}</p>
        <p>{4 + 4}</p>
        <MyComponent/>
    </div>
  )
}

export default TemplateExpressions