
const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do Carro:</h2>
        <ul>
            <li>marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>este carro é novo!</p>}
    </div>
  )
}

export default CarDetails