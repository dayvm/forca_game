export default function BotaoJogar({ iniciarJogo, statusDoJogo }) {
    return (
        <div>
            {statusDoJogo==="home" ? (
                <button onClick={iniciarJogo}>Iniciar</button>
            ) : (
                <button onClick={iniciarJogo}>Reiniciar</button>
            )}
        </div>
    );
}