import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch"

import styles from './index.module.css'

const Search = () => {
    const [searchParams] =  useSearchParams();

    const url = 'http://localhost:3000/products?' + searchParams

    const { data: items, isLoading, error } = useFetch(url);

    return (
        <div>
            <h1>Resultados disponíveis</h1>
            {isLoading && <p>Carregando...</p>}
            {error && !isLoading && <p>Houve erro ao carregar itens</p>}
            {items && !isLoading && !error && (
                items.map(item => (
                    <ul className={styles.products}>
                        <li key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            <Link to={`/products/${item.id}`}>Detalhes</Link>
                        </li>
                    </ul>
                ))
            )}
        </div>
    )
}

export { Search }