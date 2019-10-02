import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';


function App() {

  const [artista, guardarArtista] = useState('');
  const [letra, guardarLetra] = useState([]);
  const [info, guardarInfo] = useState({});

  const consultarAPILetra = async busqueda =>{
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const resultado = await axios (url);
    guardarLetra(resultado.letra.lyrics);
  }


  return (
    <Fragment>
      <Formulario 
        consultarAPILetra = {consultarAPILetra} />
    </Fragment>
  );
}

export default App;
