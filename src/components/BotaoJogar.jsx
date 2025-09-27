export default function BotaoJogar({ iniciarJogo, statusDoJogo }) {
    return (
        <div>
            {statusDoJogo==="home" ? (
                <button className= "botao-jogar" onClick={iniciarJogo}>Iniciar</button>
            ) : statusDoJogo==="jogando" ? (
                <button className= "botao-jogar" onClick={iniciarJogo}>Reiniciar</button>
            ) : (
                <button className= "botao-jogar" onClick={iniciarJogo}>Jogar novamente</button>
            )}
        </div>
    );
}