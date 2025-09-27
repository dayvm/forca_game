import './App.css'
import BotaoJogar from './components/BotaoJogar'
import Forca from './components/Forca'
import Palavra from './components/Palavra'
import Teclado from './components/Teclado'
import { CorpoDeAgua } from './components/CorpoDeAgua'; // 1. IMPORTE O NOVO COMPONENTE
import { useState, useEffect } from 'react';
import { palavras } from './data/palavras'
import jonaPng from './assets/JONA.png';
import {GAME_CONFIG} from "./config.js"
import { FimDeJogo } from "./telas/FimDeJogo.jsx"

const maxErrors = GAME_CONFIG.maxErrors;
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

    if (letrasIncorretas.length>=maxErrors){
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
      console.log(statusDoJogo)
    }
  })

  const alturaMaximaVh = 90;
  const porcentagemErro = Math.min(letrasIncorretas.length/maxErrors,1);
  const posicaoOnda = porcentagemErro*alturaMaximaVh;
  return (
    <div className="cena-container">

      {(statusDoJogo!=="venceu" && statusDoJogo!=="perdeu") && (
      <img 
        src={jonaPng} 
        alt="Personagem Jona" 
        className="personagem" 
      />
      )}

      <CorpoDeAgua erros={letrasIncorretas.length} maxErros={maxErrors} />


      {statusDoJogo==="home" && (
        <div className="home-container">
          <div className='titulo-botao'>
          <h1>SALVE O JONA</h1>
          <BotaoJogar iniciarJogo={iniciarJogo} statusDoJogo={statusDoJogo}/>
          </div>
        </div>
      )}

      {statusDoJogo==="jogando" && (
        <main className="jogando-container">

        <h1 className='titulo-jogando'>SALVE O JONA</h1>
        <div className='botao-jogando'>
        <BotaoJogar iniciarJogo={iniciarJogo} statusDoJogo={statusDoJogo}/>
        </div>
        
        <div className='playground-jogando'>
          <div className='palavra-vidas'>
            <Palavra palavraSecreta={palavraSecreta} letrasCorretas={letrasCorretas}/>
            <Forca erros={letrasIncorretas.length} statusDoJogo={statusDoJogo}/>
          </div>
        <Teclado handleTentativa={handleTentativa} letrasCorretas={letrasCorretas} letrasIncorretas={letrasIncorretas} statusDoJogo={statusDoJogo}/>

        </div>
        
      </main>

)}

{(statusDoJogo === "perdeu" || statusDoJogo=== "venceu") && (<FimDeJogo statusDoJogo={statusDoJogo} palavraSecreta={palavraSecreta}></FimDeJogo>)}
    </div>
  )
}

export default App
