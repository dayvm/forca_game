import './App.css'
import Header from './components/Header'
import Forca from './components/Forca'
import Palavra from './components/Palavra'
import Teclado from './components/Teclado'
import { useState, useEffect } from 'react';
import { palavras } from './data/palavras'
import jonaPng from './assets/JONA.png';
import ondaGif from './assets/onda gabriel renan.gif';

function App() {
  const [palavraSecreta, setPalavraSecreta] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasIncorretas, setLetrasIncorretas] = useState([]);
  const [statusDoJogo, setStatusDoJogo] = useState ('home');

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
    let venceu;
    if (statusDoJogo==="jogando"){
      venceu = palavraSecreta.
        split("")
        .every((letra) => letrasCorretas.includes(letra));
    }

    if (venceu) {
      setStatusDoJogo("venceu");
      return;
    }

    if (letrasIncorretas.length>=7){
      setStatusDoJogo("perdeu");
    }
  }, [letrasCorretas, letrasIncorretas, palavraSecreta]);

  useEffect(() => {
    console.log("Corretas:", letrasCorretas);
    console.log("Incorretas:", letrasIncorretas);
  }, [letrasCorretas, letrasIncorretas]);

  useEffect(() => {
    if (palavraSecreta) {
      console.log(palavraSecreta)
    }
  })

  return (
    <div className="cena-container">

      <img 
        src={jonaPng} 
        alt="Personagem Jona" 
        className="personagem" 
      />

      <div 
        className="ondas-container" 
        style={{ backgroundImage: `url(${ondaGif})` }}
      >
      </div>

      <main className="ui-container">
        <h1>SALVE O JONA</h1>
        <Header iniciarJogo={iniciarJogo} statusDoJogo={statusDoJogo}/>
        <Forca erros={letrasIncorretas.length} statusDoJogo={statusDoJogo}/>
        <Palavra palavraSecreta={palavraSecreta} letrasCorretas={letrasCorretas}/>
        <Teclado handleTentativa={handleTentativa} letrasCorretas={letrasCorretas} letrasIncorretas={letrasIncorretas} statusDoJogo={statusDoJogo}/>
        
        {/* Mensagens de vitória/derrota */}
      {statusDoJogo === 'venceu' && <h2>🎉 Parabéns, você venceu!</h2>}
      {statusDoJogo === 'perdeu' && <h2>❌ Você perdeu! A palavra era: {palavraSecreta}</h2>}
      </main>

    </div>
  )
}

export default App
