import { Link, Outlet, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch";

const Product = () => {
    {/* Aula 4 - Rota Dinâmica */ }
    const { id } = useParams();

    // Aula 5 - Carregamento do Dado Individual
    const url = `http://localhost:3000/products/${id}`;
    const { data: product, isLoading, error } = useFetch(url);

    return (
        <div>
            {isLoading && <p>Carregando...</p>}
            {error && !isLoading && <p>Houve um erro ao carregar os dados</p>}
            {product && !isLoading && !error && (
                <div>
                    <p>ID do produto: {id}</p>
                    <h1>Nome: {product.name}</h1>
                    <p>Preço: R${product.price}</p>
                          {/* Aula 6 - Nested Routes */}
                    <Link to={`/products/${product.id}/info`}> Detalhes do produto</Link>
                </div>
            )}
        <Outlet />
        </div>

    )
}

export { Product }