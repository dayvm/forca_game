export default function Header({ iniciarJogo }) {
    return (
        <header>
            <h1>Forca Game</h1>
            <button onClick={iniciarJogo}>Iniciar/Reiniciar</button>
        </header>
    );
}