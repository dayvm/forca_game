export default function BotaoJogar({ iniciarJogo, statusDoJogo }) {
    return (
        <div>
            {statusDoJogo==="home" ? (
                <button className= "botao-jogar" onClick={iniciarJogo}>Iniciar</button>
            ) : (
                <button className= "botao-jogar" onClick={iniciarJogo}>Reiniciar</button>
            )}
        </div>
    );
}