import jonaHAPPY from '../assets/jonaHAPPY.png';
import jonaDEAD from '../assets/jonaDEAD.png';
import BotaoJogar from '../components/BotaoJogar';

export function FimDeJogo({ statusDoJogo, palavraSecreta, iniciarJogo }) {
    const perdeu = {
        texto1: "Ah, naaaãooooo!!! Você não conseguiu salvar o JONA!",
        texto2: "A palavra secreta era '" + palavraSecreta + "'.",
        texto3: "Mas não se preocupe! Você pode tentar novamente!"
    } 
    const ganhou = {
        texto1: "Você salvou o JONA!",
        texto2: "A palavra secreta era mesmo '" + palavraSecreta + "'!",
        texto3: "Parabéns!!!! E você pode jogar novamente!!"
    }
    
    let textos = statusDoJogo==="venceu" ? ganhou : perdeu;
    let jona = statusDoJogo==="venceu" ? jonaHAPPY : jonaDEAD;

    return (
        <div className='perdeu-venceu'>
            <h1>{textos.texto1}</h1>
            <img
            src={jona}
            alt="Jona"
            className="jona-final"/>
            <h1>{textos.texto2}</h1>
            <h1>{textos.texto3}</h1>
            <BotaoJogar iniciarJogo={iniciarJogo} statusDoJogo={statusDoJogo}></BotaoJogar>
        </div>
    );

}