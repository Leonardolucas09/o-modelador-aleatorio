import { TIPO_BOTAO	 } from "./Constantes";
import style from "./Botao.module.css"

function Botao(props) {

    const { tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps } = props;

    return (
            <button className={style.Botao} tipo={tipo} {...outrasProps}>
                {props.tituloBotao}
            </button>
            
    )
}

export default Botao;