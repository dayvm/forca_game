// src/components/Teclado.jsx

export default function Teclado({ handleTentativa, letrasCorretas, letrasIncorretas, statusDoJogo }) {
    // Juntamos as linhas do teclado em um único array para facilitar a renderização
    const linhasDoTeclado = [
        "qwertyuiop".split(""),
        "asdfghjkl".split(""),
        "zxcvbnm".split("")
    ];

    // Renderizamos apenas se o jogo estiver no estado 'jogando'
    if (statusDoJogo !== "jogando") {
        return null; // Não renderiza nada se o jogo não estiver ativo
    }

    return (
        <div className="teclado">
            {linhasDoTeclado.map((linha, index) => (
                <div className="tecladoLinha" key={index}>
                    {linha.map((letra) => {
                        // Verificamos o status de cada letra
                        const isCorreta = letrasCorretas.includes(letra);
                        const isErrada = letrasIncorretas.includes(letra);
                        
                        // LÓGICA PRINCIPAL: Construímos o array de classes dinamicamente
                        const classesDoBotao = ['botao-teclado'];
                        if (isCorreta) {
                            classesDoBotao.push('correto');
                        }
                        if (isErrada) {
                            classesDoBotao.push('incorreto');
                        }

                        return (
                            <button
                                // Juntamos as classes do array em uma string
                                className={classesDoBotao.join(' ')}
                                key={letra}
                                onClick={() => handleTentativa(letra)}
                                // Desabilitamos o botão se a letra já foi tentada
                                disabled={isCorreta || isErrada}
                            >
                                {letra.toUpperCase()}
                            </button>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}