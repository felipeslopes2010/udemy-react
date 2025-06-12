import { useState } from 'react';
import './App.css'
import { MyComponent } from './components/MyComponent'
import { Title } from './components/Title';

function App() {
  const n = 15;
  const [name] = useState('Felipe');

  return (
    <div>
      {/* Aula 1 - CSS Global */}
      <h1>React com CSS</h1>
      {/* Aula 2 - CSS de Componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Aula 3 - CSS Inline */}
      <p style={{color: 'blue', padding: '25px', borderTop: '2px solid red'}}>Este elemento foi estilizado de forma inline</p>
      {/* Aula 4 - CSS Inline Dinâmico */}
      <h2 style={n < 10 ? {color: 'purple'} : {color: 'pink'}}>CSS Dinâmico</h2>
      <h2 style={n > 10 ? {color: 'purple'} : {color: 'pink'}}>CSS Dinâmico</h2>
      <h2 style={name === 'Felipe' ? {color: 'green', backgroundColor: '#000'} : null}>Teste nome</h2>
      {/* Aula 5 - CSS Modules */}
      <Title />
      <h2 className="my_title">Testando Scooped</h2>
    </div>
  )
}

export default App
