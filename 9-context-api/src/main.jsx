import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'

import { TitleColorContextProvider } from './context/title-color/index.jsx'
import { CounterContextProvider } from './context/counter/index.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* Aula 5 - Criando Contexto mais complexo */}
    <TitleColorContextProvider>
      {/* Aula 2 - Criando Provider */}
      <CounterContextProvider>
        <App />
      </CounterContextProvider>
    </TitleColorContextProvider>
  </StrictMode>,
)
