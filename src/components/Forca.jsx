export default function Forca({ erros, statusDoJogo }) {
    return (
        <div className="forca">
            {statusDoJogo==="jogando" && (
                <p>Vidas restantes: {7 - erros} </p>
            )}
            {/* <img src={`../../public/imagens/forca${erros}.png`} alt={`Erro ${erros}`} /> */}
        </div>
    );
}