// src/components/CorpoDeAgua.jsx

import ondaGif from '../assets/onda gabriel renan.gif';

// O componente recebe os erros e o máximo de erros, como planejamos
export function CorpoDeAgua({ erros, maxErros }) {
  
  // A lógica de cálculo da altura agora vive aqui dentro.
  // Vamos calcular a altura que a água deve ter, em vez de sua posição 'bottom'.
  const porcentagemDeErro = Math.min(erros / maxErros, 1);

  const alturaVariavelVh = porcentagemDeErro * 100;

  return (
    // 1. O CONTÊINER PRINCIPAL: é ele quem vai crescer e ter a transição suave.
    // Usamos a função calc() do CSS para somar a altura fixa da onda (150px)
    // com a altura variável que calculamos (em vh).
    <div 
      className="corpo-de-agua-container"
      style={{
        height: `calc(150px + ${alturaVariavelVh}vh)`
      }}
    >
      
      {/* 2. O TOPO DA ONDA (o GIF) */}
      <div 
        className="topo-onda"
        style={{ backgroundImage: `url(${ondaGif})` }}
      >
      </div>

      {/* 3. O CORPO DA ONDA (a cor sólida que preenche o resto) */}
      <div className="corpo-onda">
      </div>

    </div>
  );
}