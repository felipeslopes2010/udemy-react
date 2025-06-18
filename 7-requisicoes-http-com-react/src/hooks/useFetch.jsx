import { useEffect, useState } from "react"

// Aula 4 - Custom Hook
const useFetch = (url) => {
    const [data, setData] = useState(null);
    
    // Aula 5 - Custom hook POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    // Aula 6 - Loading de Dados
    const [isLoading, setIsLoading] = useState(false);
    // Aula 7 - Tratamento de Erros
    const [error, setError] = useState(null);

    // Desafio
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        setMethod(method);

        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        } else if (method === 'DELETE') {
            setConfig({
                method
            });

            setItemId(data)
        }
    }

    /*
        Como o estado inicial de `method` é null, 
        na primeira renderização do App o if (method === 'POST') não será verdadeiro.
        Portanto, o useEffect será chamado, mas não executará o fetch da requisição POST até que `method` e `config` 
        sejam atualizados. httpConfig(product, "POST"); no App.jsx
    */
    useEffect(() => {
        const httpRequest = async () => {
            setIsLoading(true);

            if (method === 'POST') {
                try {
                    const res = await fetch(url, config)
                    const data = await res.json();

                    setCallFetch(data);
                } catch(error) {
                    setError('Erro ao adicionar o produto')
                    console.log(error.message)
                }
            } else if (method === 'DELETE') {
                const deleteUrl = `${url}/${itemId}`;

                try {
                    const res = await fetch(deleteUrl, config)
                    const data = await res.json();

                    setCallFetch(data);
                } catch(error) {
                    setError('Erro ao deletar o produto')
                    console.log(error.message)
                }
            }

            setIsLoading(false);
        }

        httpRequest();
    }, [config, method, url, itemId]);

    useEffect(() => {
        const fetchData = async () => {
            // Aula 6 - Loading de Dados
            setIsLoading(true)

            try {
                const res = await fetch(url)
                const data = await res.json()

                setData(data)
            } catch(error) {
                console.log(error.message)
                setError('Erro ao carregar os produtos')
            }

            setIsLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    return { data, httpConfig, isLoading, error }
}


export { useFetch }