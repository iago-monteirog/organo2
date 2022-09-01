import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`

    const aoDigitidado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>

            <input onChange={aoDigitidado} value={props.valor} required={props.obrigatorio} placeholder={placeholderModificada} type={props.tipo} />

        </div>
    )
}

export default CampoTexto