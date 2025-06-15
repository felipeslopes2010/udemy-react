import styles from './index.module.css'

const GameOver = ({ score, onRestartGame }) => {
    return (
        <div className={styles.container}>
            <h1>Fim de jogo</h1>
            <p className={styles.scoreMessage}>A sua pontuação foi:
                <span className={styles.score}>{score}</span>
            </p>
            <button onClick={onRestartGame}>Reiniciar</button>
        </div>
    )
}

export { GameOver }