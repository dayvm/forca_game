import './App.css'
import Header from './components/Header'
import Forca from './components/Forca'
import Palavra from './components/Palavra'
import Teclado from './components/Teclado'
import { useState, useEffect } from 'react';
import { palavras } from './data/palavras'

function App() {
  const [palavraSecreta, setPalavraSecreta] = useState(palavras[0]);
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasIncorretas, setLetrasIncorretas] = useState([]);
  const [statusDoJogo, setStatusDoJogo] = useState ('jogando');

  const iniciarJogo = () => {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraSecreta(palavraAleatoria);
    setLetrasCorretas([]);
    setLetrasIncorretas([]);
    setStatusDoJogo('jogando');
  }

  const handleTentativa = (letra) => {
    if (!(letrasCorretas.includes(letra) || letrasIncorretas.includes(letra))){
      if (palavraSecreta.includes(letra)) {
        setLetrasCorretas(prev => [...prev, letra])
      } else {
        setLetrasIncorretas(prev => [...prev, letra])
      }
    }
  }
  
  return (
      <main className="container">
        <Header iniciarJogo={iniciarJogo}/>
        <Forca />
        <Palavra />
        <Teclado />
      </main>
  )
}

export default App
