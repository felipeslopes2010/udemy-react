import styles from './index.module.css'

const GameOver = ({ onRestartGame }) => {
    return (
        <div>
            <h1>End Game</h1>
            <button onClick={onRestartGame}>Resetar Jogo</button>
        </div>
    )
}

export { GameOver }