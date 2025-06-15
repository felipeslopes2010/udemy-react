import { useState, useRef, useEffect } from 'react';
import styles from './index.module.css'

const Game = ({
    onVerifyLetter,
    pickedRegion,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) => {
    const [guessedLetter, setGuessedLetter] = useState("");
    const letterInputRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();

        onVerifyLetter(guessedLetter)
        setGuessedLetter("")

        letterInputRef.current.focus();
    }

    useEffect(() => {
        letterInputRef.current.focus();
    }, []);

    return (
        <div className={styles.game}>
            <p className={styles.score}>
                <span>Pontuação: {score}</span>
            </p>
            <h1>Advinhe o campeão:</h1>
            <h3 className={styles.tip}>
                Região: <span>{pickedRegion}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s)</p>
            <div className={styles.wordContainer}>
                {
                    letters.map((letter, index) => (
                        guessedLetters.includes(letter) ? (
                            <span key={index} className={styles.letter}>{letter}</span>
                        ) : (
                            <span key={index} className={styles.blankSquare}></span>
                        )
                    ))
                }
            </div>
            <div className={styles.letterContainer}>
                <p>Tente advinhar uma letra do campeão:</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="letter"
                        maxLength={1}
                        onChange={(e) => setGuessedLetter(e.target.value)}
                        value={guessedLetter}
                        ref={letterInputRef}
                        required
                    />
                    <button>Jogar</button>
                </form>
            </div>
            <div className={styles.wrongLettersContainer}>
                <p>Letras já utilizadas:</p>
                {
                    wrongLetters.map((wrongLetter, index) => (
                        <span key={index}>{wrongLetter}, </span>
                    ))
                }
            </div>
        </div>
    )
}

export { Game }