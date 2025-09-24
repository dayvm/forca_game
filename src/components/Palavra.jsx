export default function Palavra({ palavraSecreta, letrasCorretas }) {
    return (
        <div className="palavra">
            {palavraSecreta.split("").map((letra, index) => (
                <span key={index} className="letra">
                    {letrasCorretas.includes(letra) ? letra.toUpperCase() : ""}
                </span>
            ))}
        </div>
    );
}