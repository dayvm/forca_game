export default function Teclado({ handleTentativa, letrasCorretas, letrasIncorretas, statusDoJogo}) {
    const tecladoPrimeiraLinha = "qwertyuiop".split("");
    const tecladoSegundaLinha = "asdfghjkl".split("");
    const tecladoTerceiraLinha = "zxcvbnm".split("");

    return (
    <div>
        {statusDoJogo === "jogando" && (
            <div className="teclado">
                <div className="tecladoLinha">
                    {tecladoPrimeiraLinha.map((letra) => (
                        <button className="botao-teclado"
                            key={letra}
                            onClick={() => handleTentativa(letra)}
                            disabled={statusDoJogo !== "jogando" || letrasCorretas.includes(letra) || letrasIncorretas.includes(letra)}
                        >
                            {letra.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div className="tecladoLinha">
                    {tecladoSegundaLinha.map((letra) => (
                        <button className="botao-teclado"
                            key={letra}
                            onClick={() => handleTentativa(letra)}
                            disabled={statusDoJogo !== "jogando" || letrasCorretas.includes(letra) || letrasIncorretas.includes(letra)}
                        >
                            {letra.toUpperCase()}
                        </button>
                    ))}
                </div>
                <div className="tecladoLinha">
                    {tecladoTerceiraLinha.map((letra) => (
                        <button className="botao-teclado"
                            key={letra}
                            onClick={() => handleTentativa(letra)}
                            disabled={statusDoJogo !== "jogando" || letrasCorretas.includes(letra) || letrasIncorretas.includes(letra)}
                        >
                            {letra.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        )}
    </div>
);
}