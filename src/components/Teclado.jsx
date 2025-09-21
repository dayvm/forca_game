export default function Teclado({ handleTentativa, letrasCorretas, letrasIncorretas, statusDoJogo}) {
    const letras = "abcdefghijklmnopqrstuvwxyz".split("");

    return (
        <div className="teclado">
            {letras.map((letra) => (
                <button key={letra}
                onclick={() => handleTentativa(letra)}
                disabled={statusDoJogo!=="jogando"}
                >
                {letra.toUpperCase()}
                </button>
            ))}
        </div>
    );
}