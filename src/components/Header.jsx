export default function Header({ iniciarJogo, statusDoJogo }) {
    return (
        <header>
            <h1>Forca Game</h1>
            {statusDoJogo==="home" ? (
                <button onClick={iniciarJogo}>Iniciar</button>
            ) : (
                <button onClick={iniciarJogo}>Reiniciar</button>
            )}
        </header>
    );
}