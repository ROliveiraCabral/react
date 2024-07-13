import "./App.css";
import { useState } from "react";
//import { useEffect } from "react";
//4 - import custom hook
import useFetch from "./hooks/useFetch.jsx"

function App() {
  const url = "http://localhost:3000/products";

  //const [products, setProducts] = useState([]);

  // 4 - custom hooks

  const { data: items, httpCongig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1 - Resgatando dados
  /*useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, []);*/

  //2 - adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault;

    const product = {
      name,
      price,
    };

    /*const res = await fetch(url, {
      method: "Post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - carregamento dinâmico

    const addedProducts = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProducts]);*/

    //5 - refatorando post
    httpCongig(product, "POST")

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/*6 - loading */}
      {loading && <p>carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
              <ul>
              {items &&
                items.map((product) => (
                  <li key={product.id}>
                    {product.name} - R$: {product.price}
                  </li>
                ))}
            </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/*7 - state de loading no post*/}
          {loading && <input type="submit" disabled value="aguarde" />}
          {!loading && <input type="submit" value="criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
