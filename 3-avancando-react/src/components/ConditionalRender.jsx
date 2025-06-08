import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState('Matheus')

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se X for true, sim</p>}
            {!x && <p>Agora X é falso</p>}
            {name === 'João' ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                 <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
            <button onClick={() => setName('João')}>Alterar nome</button>
        </div>
    )
}

export { ConditionalRender }