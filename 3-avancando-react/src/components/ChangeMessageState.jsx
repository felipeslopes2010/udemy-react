const ChangeMessageState = ({ changeMessage }) => {
    const messages = ["Olá", "Teste", "Tudo bem?"]
    return (
        <div>
            <button onClick={() => changeMessage(messages[0])}>Mensagem 1</button>
            <button onClick={() => changeMessage(messages[1])}>Mensagem 2</button>
            <button onClick={() => changeMessage(messages[2])}>Mensagem 3</button>
        </div>
    )
}

export { ChangeMessageState }