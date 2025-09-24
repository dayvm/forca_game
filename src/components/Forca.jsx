export default function Forca({ erros, statusDoJogo }) {
    return (
        <div>
            {statusDoJogo==="jogando" && (
                <p className="vidas">Vidas restantes: {7 - erros} </p>
            )}
            {/* <img src={`../../public/imagens/forca${erros}.png`} alt={`Erro ${erros}`} /> */}
        </div>
    );
}