import { useState } from "react";
// import Botao from "../botao/Botao";
import style from "./Perguntas.module.css"

function Perguntas(props) {
    
    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Seu Nome é ${nome} e a Raça é ${raca}`)
    }

    return (
            <form className={style.Form} onSubmit={handleSubmit}>
                <label>Nome do Personagem</label>
                <input type="text" placeholder="Nome do Personagem" value={nome} onChange={ (e) => setNome(e.target.value)}/>
                
                <label>Raça de Personagem</label>
                <input type="text" placeholder="Raça do Personagem" value={raca} onChange={(e) => setRaca(e.target.value)}/>
            </form>
    )
}

export default Perguntas;