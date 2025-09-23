export default function Header({ iniciarJogo, statusDoJogo }) {
    return (
        <header>
            {statusDoJogo==="home" ? (
                <button onClick={iniciarJogo}>Iniciar</button>
            ) : (
                <button onClick={iniciarJogo}>Reiniciar</button>
            )}
        </header>
    );
}