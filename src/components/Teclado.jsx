export default function Teclado({ handleTentativa, letrasCorretas, letrasIncorretas, statusDoJogo}) {
    const letras = "abcdefghijklmnopqrstuvwxyz".split("");

    return (
        <div className="teclado">
            {statusDoJogo==="jogando" && (
            letras.map((letra) => (
                <button key={letra}
                onClick={() => handleTentativa(letra)}
                disabled={statusDoJogo!=="jogando" || letrasCorretas.includes(letra) || letrasIncorretas.includes(letra)}
                >
                {letra.toUpperCase()}
                </button>))
            )}
            
        </div>
    );
}