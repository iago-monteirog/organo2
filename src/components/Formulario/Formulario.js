import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';
import { useState } from 'react';


const Formulario = (props) => {

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [recompensa,setRecompensa] = useState('')
    const [time,setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            recompensa,
            time
        })
        setNome('');
        setCargo(''); 
        setImagem('');
        setRecompensa();
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Pirata</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor = {nome} aoAlterado={valor => setNome(valor)} />

                <CampoTexto obrigatorio={true} label="Função" placeholder="Digite sua função" valor = {cargo} aoAlterado={valor => setCargo(valor)} />

                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor = {imagem} aoAlterado={valor => setImagem(valor)}/>

                <CampoTexto label="Recompensa" placeholder="Digite a recompensa para sua cabeça" valor = {recompensa} aoAlterado={valor => setRecompensa(valor)}/>

                <ListaSuspensa obrigatorio={true} label="Tripulação" itens={props.times} valor = {time} 
                aoAlterado={valor => setTime(valor)}/>

                <Botao>
                    Criar Pirata
                </Botao>
            </form>
        </section>
    )
}

export default Formulario