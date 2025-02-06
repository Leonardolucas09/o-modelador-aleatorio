import style from "./CampoTexto.module.css"

function CampoTexto(props) {
    
    return(
        <div>
            <label className={style.labelCampo}> {props.labelCampo}</label>
            <input type="text" placeholder={props.placeholderCampo} className={style.CampoTexto}/>
        </div>
    )
}

export default CampoTexto