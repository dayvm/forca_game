export default function Forca({ erros }) {
    return (
        <div className="forca">
            <p>Vidas restantes: {7 - erros} </p>
            {/* <img src={`../../public/imagens/forca${erros}.png`} alt={`Erro ${erros}`} /> */}
        </div>
    );
}