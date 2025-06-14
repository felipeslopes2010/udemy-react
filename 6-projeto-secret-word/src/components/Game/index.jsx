import styles from './index.module.css'

const Game = ({ onVerifyLetter }) => {
    return (
        <div className={styles.game}>
            <p className={styles.points}>
                <span>Pontuação: 000</span>
            </p>
            <h1>Advinhe a palavra:</h1>
            <h3 className={styles.tip}>
                Dica sobre a palavra: <span>Dica...</span>
            </h3>
            <p>Você ainda tem XXX tentativa(s)</p>
            <div className={styles.wordContainer}>
                <span className={styles.letter}>A</span>
                <span className={styles.blankSquares}></span>
            </div>
            <div className={styles.letterContainer}>
                <p>Tente advinhar uma letra da palavra:</p>
                <form>
                    <input type="text" name="letter" maxLength={1} required />
                <button>Jogar</button>
                </form>
            </div>
            <div className={styles.wrongLettersContainer}>
                <p>Letras já utilizadas:</p>
                <span>a,</span>
                <span>b,</span>
            </div>
        </div>
    )
}

export { Game }