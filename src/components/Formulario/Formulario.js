import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';


const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do Colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <CampoTexto label="Time" placeholder="Digite seu time" />
            </form>
        </section>
    )
}

export default Formulario