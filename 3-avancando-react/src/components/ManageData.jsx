import { useState } from "react"

const ManageDate = () => {
    let someData = 10;

    console.log(someData)

    const [number, setNumber] = useState(15)

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar variável</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar variável</button>
            </div>
        </div>
    )
}

export { ManageDate }