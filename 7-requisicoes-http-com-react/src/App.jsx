import { useState } from 'react';
import './App.css'

import { useFetch } from './hooks/useFetch'

const url = 'http://localhost:3000/products'

const App = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  //Aula 4 - Custom Hook
  const { data: items, httpConfig, isLoading, error } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name, price
    }

    //Aula 5 - Refatorando o POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  // Desafio
  const handleRemove = productId => {
    httpConfig(productId, "DELETE");
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      { error && <p>{error}</p> }
      { !error && isLoading && <p>Carregando dados...</p> }
      { !error && !isLoading && (
          <ul>
            {
              items?.map(product => (
                <li key={product.id}>
                  {product.name} - R$:{product.price}
                  <button onClick={() => handleRemove(product.id)}>Excluir</button>
                </li>
              ))
            }
          </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome do Produto:</span>
            <input type="text" value={name} onChange={e => { setName(e.target.value) }} required />
          </label>
          <label>
            <span>Preço:</span>
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />
          </label>
          <button disabled={isLoading}>Adicionar Produto</button>
        </form>
      </div>
    </div>
  )
}

export { App }
