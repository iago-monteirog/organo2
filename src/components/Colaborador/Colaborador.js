import './Colaborador.css'

const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src='https://github.com/iago-monteirog.png' alt='Iago'/>
            </div>
            <div className='rodape'>
                <h4>Iago</h4>
                <h5>DEV</h5>
            </div>
        </div>
    );
}

export default Colaborador