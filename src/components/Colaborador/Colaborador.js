import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, recompensa, corDeFundo }) => {
    const corCabecalho = {backgroundColor: corDeFundo  }
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={corCabecalho}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h6>{recompensa}</h6>
            </div>
        </div>
    );
}

export default Colaborador