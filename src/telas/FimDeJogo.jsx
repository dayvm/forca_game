import jonaHAPPY from '../assets/jonaHAPPY.png';
import jonaDEAD from '../assets/jonaDEAD.png';
import BotaoJogar from '../components/BotaoJogar';

export function FimDeJogo({ statusDoJogo, palavraSecreta, iniciarJogo }) {
    const perdeu = {
        texto1: "O Jona não foi salvo desta vez...",
        texto2: "A palavra era " + palavraSecreta.toUpperCase() + ".",
        texto3: "Mas não se preocupe! Você pode tentar novamente!"
    } 
    const ganhou = {
        texto1: "JONA ESTÁ A SALVO!",
        texto2: "A palavra era " + palavraSecreta.toUpperCase() + "!",
        texto3: "Parabéns!!!! E você pode jogar novamente!!"
    }
    
    let textos = statusDoJogo==="venceu" ? ganhou : perdeu;
    let jona = statusDoJogo==="venceu" ? jonaHAPPY : jonaDEAD;

    return (
        <div className='perdeu-venceu'>
            <h1 className='palavra palavra--final-um'>{textos.texto1}</h1>
            <img
            src={jona}
            alt="Jona"
            className="palavra palavra--final-image"/>
            <h1 className='palavra palavra--final-dois'>{textos.texto2}</h1>
            
            <BotaoJogar iniciarJogo={iniciarJogo} statusDoJogo={statusDoJogo}></BotaoJogar>
        </div>
    );

}