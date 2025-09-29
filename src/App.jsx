import './App.css'
import BotaoJogar from './components/BotaoJogar'
import Forca from './components/Forca'
import Palavra from './components/Palavra'
import Teclado from './components/Teclado'
import { CorpoDeAgua } from './components/CorpoDeAgua'; // 1. IMPORTE O NOVO COMPONENTE
import { useState, useEffect, useRef } from 'react';
import { palavras } from './data/palavras'
import { GAME_CONFIG } from "./config.js"
import { FimDeJogo } from "./telas/FimDeJogo.jsx"
import jonaLOGO from "./assets/JONAlogo.png";
import jonaFUNDO from "./assets/JONAfundo.png";
import jonaBONECO from "./assets/jonaPadraoNovo.png";
import jonaMUSICA from "./audio/jona_musica_fundo.mp3";
import answer from "./audio/hover1.mp3";
import win from "./audio/win1.mp3";
import lose from "./audio/lost.mp3";

const maxErrors = GAME_CONFIG.maxErrors;
function App() {
  const [palavraConjunto, setPalavraConjunto] = useState([])
  const [palavraSecreta, setPalavraSecreta] = useState("");
  const [dicaEscolhida, setDica] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasIncorretas, setLetrasIncorretas] = useState([]);
  const [statusDoJogo, setStatusDoJogo] = useState('home');

  const musicaFundoRef = useRef(new Audio(jonaMUSICA));
  const musicaIniciada = useRef(false);
  const answerGame = new Audio(answer);
  const volume = 0.5;
  answerGame.volume = volume;

  const iniciarJogo = () => {
    const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    const palavraAleatoria = palavraEscolhida.palavra;
    const dica = Math.random() < 0.5 ? palavraEscolhida.pergunta : palavraEscolhida.elaborada;
    setPalavraSecreta(palavraAleatoria);
    setPalavraConjunto(palavraEscolhida);
    setDica(dica);
    setLetrasCorretas([]);
    setLetrasIncorretas([]);
    setStatusDoJogo('jogando');
  }

  const handleTentativa = (letra) => {
    if (!(letrasCorretas.includes(letra) || letrasIncorretas.includes(letra))) {
      if (palavraSecreta.includes(letra)) {
        setLetrasCorretas(prev => [...prev, letra])
      } else {
        setLetrasIncorretas(prev => [...prev, letra])
      }
    }
  }

  useEffect(() => {
    let venceu;
    if (statusDoJogo === "jogando") {
      venceu = palavraSecreta.
        split("")
        .every((letra) => letrasCorretas.includes(letra));
    }

    if (venceu) {
      setStatusDoJogo("venceu");
      return;
    }

    if (letrasIncorretas.length >= maxErrors) {
      setStatusDoJogo("perdeu");
    }
  }, [letrasCorretas, letrasIncorretas, palavraSecreta]);


  useEffect(() => {
    const audio = musicaFundoRef.current;

    if (statusDoJogo === "jogando" && musicaIniciada.current === false) {
      musicaIniciada.current = true;

      // Configura a música para tocar em loop
      audio.loop = true;

      // Tenta tocar a música.
      // O .catch() é importante para lidar com as políticas de autoplay dos navegadores.
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // O autoplay foi bloqueado pelo navegador. Isso é normal.
          // A música provavelmente começará quando o usuário interagir com a página.
          console.log("Autoplay da música de fundo bloqueado:", error);
        });
      }
    }
    return () => {
      // A "função de limpeza": será executada quando o componente for desmontado
      // audio.pause(); // Pausa a música para não continuar tocando em outras páginas
      // audio.currentTime = 0; // Opcional: reseta a música para o início
    };
  }, [statusDoJogo]);

  useEffect(() => {
    if ((letrasCorretas && letrasCorretas.length != 0) || (letrasIncorretas && letrasIncorretas.length != 0)) {
      answerGame.play();
    }
  }, [letrasCorretas, letrasIncorretas]);

  useEffect(() => {
    if (statusDoJogo === "venceu") {
      const winGame = new Audio(win);
      winGame.volume = volume;
      winGame.play()
    }
    if (statusDoJogo === "perdeu") {
      const loseGame = new Audio(lose);
      loseGame.volume = volume;
      loseGame.play()
    }
  }, [statusDoJogo])

  return (
    <div
      className="cena-container"
      style={{ backgroundImage: `url(${jonaFUNDO})` }}
    >

      {statusDoJogo === "home" ? (
        <img
          src={jonaLOGO}
          alt="Personagem Jona"
          className="personagem"
        />
      ) : statusDoJogo === "jogando" ? (

        <img
          src={jonaBONECO}
          alt="Personagem Jona"
          className="personagem"
        />
      ) : (<div></div>)
      }


      <CorpoDeAgua erros={letrasIncorretas.length} maxErros={maxErrors} statusDoJogo={statusDoJogo} />


      {statusDoJogo === "home" && (
        <div className="home-container">
          <div className='titulo-botao'>
            <BotaoJogar iniciarJogo={iniciarJogo} statusDoJogo={statusDoJogo} />
          </div>
        </div>
      )}

      {statusDoJogo === "jogando" && (
        <main className="jogando-container">


          <img
            src={jonaLOGO}
            alt="Personagem Jona"
            className="logo-pequena"
          />
          <div className='botao-jogando'>
            <BotaoJogar iniciarJogo={iniciarJogo} statusDoJogo={statusDoJogo} />
          </div>

          <div className='playground-jogando'>
            <div className='palavra-vidas'>
              <h1>Tema: {palavraConjunto.tema.toUpperCase()}</h1>
              <Palavra palavraSecreta={palavraSecreta} letrasCorretas={letrasCorretas} />
              {letrasIncorretas.length >= 2 && letrasIncorretas.length < 6 && (
                <h3>
                  {letrasIncorretas.length === 2 && "🌊 O JONA já está com água até os joelhos... cuidado!"}
                  {letrasIncorretas.length === 4 && "😰 A água está chegando no peito do JONA... você precisa acertar logo!"}
                  {letrasIncorretas.length === 5 && "⚠️ O JONA está quase se afogando! É sua última chance de salvá-lo!"}
                </h3>
              )}

              {letrasIncorretas.length === 6 && (
                <h3>💡 O JONA grita antes de afundar: DICA → {dicaEscolhida}</h3>
              )}

              <Forca erros={letrasIncorretas.length} statusDoJogo={statusDoJogo} />
            </div>
            <Teclado handleTentativa={handleTentativa} letrasCorretas={letrasCorretas} letrasIncorretas={letrasIncorretas} statusDoJogo={statusDoJogo} />

          </div>

        </main>

      )}

      {(statusDoJogo === "perdeu" || statusDoJogo === "venceu") && (<FimDeJogo statusDoJogo={statusDoJogo} palavraSecreta={palavraSecreta} iniciarJogo={iniciarJogo}></FimDeJogo>)}
    </div>
  )
}

export default App
