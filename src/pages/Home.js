import { useState } from "react";
import Botao from "../components/botao/Botao";
import { TIPO_BOTAO } from "../components/botao/Constantes";
// import CampoTexto from "../components/campoTexto/CampoTexto";
// import Resultados from "../components/resultados/Resultados";

import style from './Home.module.css';

function Home(props) {

    const [nome, setNome] = useState("");
    const [raca, setRaca] = useState(""); 
    const [personagens, setPersonagens] = useState([]);
    const [personagensEmbaralhados, setPersonagensEmbaralhados] = useState([]);

    const handleAdicionar = (event) => {
        event.preventDefault();
        const novoPersonagem = { nome, raca };
        setPersonagens([...personagens, novoPersonagem]);

        setNome("");
        setRaca("");
    }

    const handleSortear = (event) => {
        event.preventDefault();
        
        if (personagens.length < 3) {
            alert("Adicione pelo menos 3 personagens para sorter.");
            return;
        }
        
        let racasEmbaralhadas;
        let todosDiferentes = false;
        
        while (!todosDiferentes) {
            const racas = personagens.map(personagens => personagens.raca);
            racasEmbaralhadas = [...racas];
            
            for(let i = racasEmbaralhadas.length - 1; i > 0; i--) {
                // Escolhe aleatoriamente um índice entre 0 e i.
                // Inicia-se no último índice e é decrementado até o 0.
                const rAleatoria = Math.floor(Math.random() * (i + 1));
                
                // Uma variável temporária para atribuir o valor de racasEmbaralhadas[i]
                // Substitui-se racasEmbaralhadas[i] por racasEmbaralhadas[rAleatoria]
                // Substitui o valro de racasEmbaralhadas[rAleatoria] para racasEmbaralhadas[i]
                const temp = racasEmbaralhadas[i];
                racasEmbaralhadas[i] = racasEmbaralhadas[rAleatoria];
                racasEmbaralhadas[rAleatoria] = temp;
            }
            todosDiferentes = personagens.every((personagem, index) => personagem.raca !== racasEmbaralhadas[index]);    
        }

        const novosPersonagens = personagens.map((personagem, index) => ({
            nome: personagem.nome,
            raca: racasEmbaralhadas[index]
        }))
        setPersonagensEmbaralhados(novosPersonagens);
    }

    return(
        <section className={style.Container}>
            <form onSubmit={handleAdicionar}>
                <div className={style.CampoHome}>
                    <div>
                        <label className={style.LabelCampo}> Digite o nome do personagem</label>
                        <input className={style.CampoTexto} type="text" placeholder="Nome do Personagem" 
                        value={nome} onChange={ (e) => setNome(e.target.value)} required/>
                    </div>

                    <div>
                        <label className={style.LabelCampo}> Digite o nome do personagem</label>
                        <input className={style.CampoTexto} type="text" placeholder="Raça do Personagem"
                        value={raca} onChange={ (e) => setRaca(e.target.value)} required/>
                    </div>
                </div>

                <div className={style.Botoes}>
                    <Botao tituloBotao="Adicionar" 
                    tipo={TIPO_BOTAO.PRIMARIO}/> 
                    <Botao tituloBotao="Sortear" 
                    tipo={TIPO_BOTAO.SECUNDARIO}
                    onClick={handleSortear}/> 
                    <Botao tituloBotao="Reiniciar" 
                    tipo={TIPO_BOTAO.TERCIARIO}/> 
                </div>
            </form>

            <div className={style.Resultados}>
                <div>
                    <p className={style.AdicionadoTitulo}>Personagens & Raças inclusos</p>
                    <div className={style.ContainerResultados}>
                        {personagens.map((personagem, index) => (
                            <div key={index} className={style.PersonagemItem}>
                                {personagem.nome} → {personagem.raca}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className={style.SorteadoTitulo}>Sorteio</p>
                    <div className={style.ContainerResultados}>
                        {personagensEmbaralhados.map((personagem, index) => (
                            <div key={index} className={style.PersonagemItem}>
                                {personagem.nome} → {personagem.raca}
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Home