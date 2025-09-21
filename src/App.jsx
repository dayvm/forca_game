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
  
  useEffect (() => {
    const venceu = palavraSecreta.
      split("")
      .every((letra) => letrasCorretas.includes(letra));

    if (venceu) {
      setStatusDoJogo("venceu");
      return;
    }

    if (letrasIncorretas.length>=6){
      setStatusDoJogo("perdeu");
    }
  }, [letrasCorretas, letrasIncorretas, palavraSecreta]);

  return (
      <main className="container">
        <Header iniciarJogo={iniciarJogo}/>
        <Forca erros={letrasIncorretas.length}/>
        <Palavra palavraSecreta={palavraSecreta} letrasCorretas={letrasCorretas}/>
        <Teclado handleTentativa={handleTentativa} letrasCorretas={letrasCorretas} letrasIncorretas={letrasIncorretas} statusDoJogo={statusDoJogo}/>

      <h2>palavraSecreta {palavraSecreta}</h2>
      <h2>letrasCorretas {letrasCorretas}</h2>
      <h2>letrasIncorretas {letrasIncorretas}</h2>
      <h2>statusDoJogo {statusDoJogo}</h2>
        {/* Mensagens de vitória/derrota */}
      {statusDoJogo === 'venceu' && <h2>🎉 Parabéns, você venceu!</h2>}
      {statusDoJogo === 'perdeu' && <h2>❌ Você perdeu! A palavra era: {palavraSecreta}</h2>}
      </main>
  )
}

export default App
