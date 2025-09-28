export default function BotaoJogar({ iniciarJogo, statusDoJogo }) {
    return (
        <div>
            {statusDoJogo==="home" ? (
                <button className= "botao-jogar" onClick={iniciarJogo}>SALVAR O JONA!</button>
            ) : statusDoJogo==="jogando" ? (
                <button className= "botao-jogar" onClick={iniciarJogo}>Nova Palavra</button>
            ) : statusDoJogo==="venceu" ? (
                <button className= "botao-jogar botao-jogar--final" onClick={iniciarJogo}>Jogar novamente</button>
            ) : (
                 <button className= "botao-jogar botao-jogar--final" onClick={iniciarJogo}>Tentar novamente</button>
            )}
        </div>
    );
}