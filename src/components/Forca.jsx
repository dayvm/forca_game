import {GAME_CONFIG} from "../config.js"
const maxErrors = GAME_CONFIG.maxErrors;

export default function Forca({ erros, statusDoJogo }) {
    return (
        <div>
            {statusDoJogo==="jogando" && (
                <p className="vidas">Vidas restantes: {maxErrors - erros} </p>
            )}
            {/* <img src={`../../public/imagens/forca${erros}.png`} alt={`Erro ${erros}`} /> */}
        </div>
    );
}