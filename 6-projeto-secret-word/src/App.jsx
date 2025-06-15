import { useState, useEffect, useCallback, useMemo } from 'react'

import { StartScreen } from './components/StartScreen'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'

import { championsList } from './data/champions'

import './App.css'

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [champions] = useState(championsList)

  const [pickedRegion, setPickedRegion] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);
  const uniqueCorrectLetters = useMemo(() => [...new Set(letters)], [letters]);

  const pickWordAndCategory = useCallback(() => {
    const regionsList = Object.keys(champions)
    const region = regionsList[Math.floor(Math.random() * regionsList.length)]

    const champion = champions[region][Math.floor(Math.random() * champions[region].length)];

    return { region, champion }
  }, [champions])

  const startGame = useCallback(() => {
    resetGameData();

    const { region, champion } = pickWordAndCategory()

    const championNameLetters = champion.replace(/\s/g, '').toLowerCase().split('');

    console.log({ region: region, champion: champion, championNameLetters: championNameLetters })

    setPickedRegion(region)
    setLetters(championNameLetters)

    console.log(champion)

    setGameStage(stages[1].name);
  }, [pickWordAndCategory])

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) return;

    if (!letters.includes(normalizedLetter)) {
      setWrongLetters(actualGuessedLetters => [...actualGuessedLetters, normalizedLetter])
      setGuesses(prev => prev - 1);

      return;
    }

    setGuessedLetters(actualGuessedLetters => [...actualGuessedLetters, normalizedLetter])
  }

  const resetGameData = () => {
    setPickedRegion('');
    setLetters([]);
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(3);
  }

  const restartGame = () => {
    setScore(0);

    setGameStage(stages[0].name);
  }

  useEffect(() => {
    if (guessedLetters.length === uniqueCorrectLetters .length) {
      setScore(actualScore => actualScore + 100)
      startGame()
    }
  }, [guessedLetters, uniqueCorrectLetters ,startGame])

  useEffect(() => {
    if (guesses <= 0) {
      setGameStage(stages[2].name);
    }
  }, [guesses])

  return (
    <div className='App'>
      {gameStage === stages[0].name && <StartScreen onStartGame={startGame} />}
      {gameStage === stages[1].name && (<Game
        onVerifyLetter={verifyLetter}
        pickedRegion={pickedRegion}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
      />
      )}
      {gameStage === stages[2].name && <GameOver score={score} onRestartGame={restartGame} />}
    </div>
  )
}

export { App }
