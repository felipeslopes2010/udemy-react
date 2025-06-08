const ShowUserName = (props) => (
        <div>
            <h2>O nome do usuário é: {props.name}</h2>
            <h2>{props.age}</h2>
            <h2>{props.job}</h2>
        </div>
)

export { ShowUserName }