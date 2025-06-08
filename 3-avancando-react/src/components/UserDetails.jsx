const UserDetails = ({ name, age, job }) => {
    const isOverAge = age >= 18

    return (
        <div>
            <h2>{name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>
            {isOverAge ? <p>Pode tirar carteira de habilitação</p> : <p>Menor de idade</p>}
        </div>
    )
}

export { UserDetails }