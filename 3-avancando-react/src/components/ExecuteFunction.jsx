const ExecuteFunction = ({ users, deleteRandomUser }) => (
        <div>
            <ul>
            {
                users.map((user) => (
                    <p key={user.id}>{user.name} - {user.age} - {user.job}</p>
                ))
            }
                </ul>
            <button onClick={deleteRandomUser}>Executar função</button>
        </div>
)

export { ExecuteFunction }