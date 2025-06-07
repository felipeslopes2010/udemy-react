const TemplateExpressions = () => {
    const name = 'Felipe'
    const data = {
        age: 30,
        job: 'Programmer'
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{console.log('xD')}</p>
        </div>
    )
}

export { TemplateExpressions }