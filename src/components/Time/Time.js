import './Time.css'

const Time = (props) => {
    const cssSecundario = { backgroundColor: props.corSecundaria }
    const cssPrimario = { borderColor: props.corPrimaria }
    
    return (       
        <section className='time' style={cssSecundario}>
            <h3 style={cssPrimario}>{props.nome}</h3>
        </section>
    );
}

export default Time;