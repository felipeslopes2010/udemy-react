const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log('Ativou o evento')
    }

    const renderSomething = x => {
        if(x) return <h1>Renderizando isso</h1>
        return <h1>Também posso renderizar isso</h1>
    }
    
    return (
        <div>
            <div>
               <button onClick={handleMyEvent}>Clique aqui!</button> 
            </div>
            {/* Função diretamente pelo Evento */}
            <div>
               <button onClick={() => console.log('Clicou Evento direto')}>Clique Evento direto!</button> 
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export { Events }