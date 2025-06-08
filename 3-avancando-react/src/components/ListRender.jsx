import { useState } from "react"

const ListRender = () => {
    const [list] = useState(['Matheus', 'Pedro', 'Maria'])

    const [users, setUsers] = useState([
        {id: '1', nome: 'Felipe', idade: 30, hobby: 'games'},
        {id: '2', nome: 'João', idade: 33, hobby: 'futebol'},
        {id: '3', nome: 'Kleber', idade: 10, hobby: 'voltei'},
    ])

    const handleDeleteRandom = () => {
        const randomUserId = Math.floor(Math.random() * 4);

        setUsers(prev => prev.filter(user => String(randomUserId) !== user.id ))
    }

    return (
        <div>
            <ul>
                {list.map((pessoa, index) => (
                    <li key={index}>
                       {pessoa}
                    </li>    
                ))}
            </ul>
            <ul>
            {users.map((user) => (
                <li key={user.id}>
                    Nome: {user.nome}, Idade: {user.idade}, Hobby: {user.hobby}
                </li>    
            ))}
            </ul>
            <button onClick={handleDeleteRandom}>Deletar usuario</button>
        </div>
    )
}

export { ListRender }