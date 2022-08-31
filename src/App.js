import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Rodape from './components/Rodape/Rodape';
import Time from './components/Time/Time';

function App() {

  const times = [
    {
      nome: 'Piratas do Barba Negra',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Piratas da Big Mom',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Piratas das Cem Feras',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Piratas do Ruivo',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Remanescentes dos Piratas do Barba Branca',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Chapéus de Palha',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Donquixote Family',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
