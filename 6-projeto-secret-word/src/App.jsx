import { useState, useEffect, useCallback } from 'react'

import { StartScreen } from './components/StartScreen'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'

import { championsList } from './data/champions'

import './App.css'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [champions] = useState(championsList)

  const [pickedRegion, setPickedRegion] = useState("")
  const [pickedChampion, setPickedChampion] = useState("")
  const [letters, setLetters] = useState([])

  const pickWordAndCategory = () => {
    const regionsList = Object.keys(champions)
    const region = regionsList[Math.floor(Math.random() * regionsList.length)]

    const champion = champions[region][Math.floor(Math.random() * champions[region].length)];

    return {
      region,
      champion
    }
  }

  const startGame = () => {
    const { region, champion } = pickWordAndCategory()

    let championNameLetters = champion.replace(' ', '').toLowerCase().split('');

    championNameLetters = championNameLetters.map(l => l.toLowerCase())

    console.log({region: region, champion: champion, championNameLetters: championNameLetters})
    
    setPickedRegion(region)
    setPickedChampion(champion)
    setLetters(championNameLetters)

    setGameStage(stages[1].name);
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  const restartGame = () => {
    setGameStage(stages[0].name);
  }


  return (
    <div className='App'>
      { gameStage === stages[0].name && <StartScreen onStartGame={startGame} /> }
      { gameStage === stages[1].name && <Game onVerifyLetter={verifyLetter} /> }
      { gameStage === stages[2].name && <GameOver onRestartGame={restartGame} /> }
    </div>
  )
}

export { App }
