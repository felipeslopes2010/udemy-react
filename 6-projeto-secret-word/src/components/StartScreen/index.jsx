import styles from './index.module.css'

const StartScreen = ({ onStartGame }) => {
    return (
        <div>
            <h1 className={styles.title}>Secret World</h1>
            <p className={styles.description}>Clique no botão abaixo para começar a jogar</p>
            <button onClick={onStartGame}>Começar Jogo</button>
        </div>
    )
}

export { StartScreen }