import styles from './index.module.css'

import { Link } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch'

const Home = () => {
    // Aula 3 - Carregamento de Dados
    const url = 'http://localhost:3000/products';

    const { data: items, isLoading, error } = useFetch(url);

    return (
        <div>
            <h1>Produtos</h1>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Houve erro ao carregar itens</p>}
            {
                !isLoading && !error && (
                    <ul className={styles.products}>
                        {items?.map((item) => (
                            <li key={item.id}>
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                                 {/* Aula 4 - Rota Dinâmica */}
                                <Link to={`products/${item.id}`}>
                                    Detalhes
                                </Link>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export { Home }