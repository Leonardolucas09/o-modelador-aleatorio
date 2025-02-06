import style from "./Resultados.module.css";

function Resultados(props) {
    return (

        <article className={style.SecaoResultados}>
            <label className={style.ResultadoTitulo}>{props.labelResultados}</label>
            <div className={style.ContainerResultado}><p>{props.containerResultado}</p></div>
        </article>

        // <section className={style.SecaoResultados}>
        //     <article>
        //         <label className={style.ResultadoTitulo}>Personagens & Raças incluídos</label>
        //             <div className={style.containerResultado}>
        //                 <p>Nome → Raça</p>
        //             </div>
        //     </article>

        //     <article>
        //         <label className={style.ResultadoTitulo}>Sorteio</label>
        //             <div className={style.containerResultado}>
        //                 <p>Nome → Raça</p>
        //             </div>
        //     </article>
        // </section>
        
    );
}

export default Resultados;