import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';
import axios from 'axios';


function App() {

  const [artista, guardarArtista] = useState('');
  const [letra, guardarLetra] = useState([]);
  const [info, guardarInfo] = useState({});

  useEffect( () => {
    if (artista !== "")
      consultarAPIInfo(artista);
  }, [artista])

  const consultarAPILetra = async busqueda =>{
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const resultado = await axios (url);
    guardarLetra(resultado.data.lyrics);
    guardarArtista(artista);
  }

  const consultarAPIInfo = async (artista) =>{
    const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    const resultado = await axios(url);
    guardarInfo(resultado.data.artists[0]);
  }

  return (
    <Fragment>
      <Formulario 
        consultarAPILetra = {consultarAPILetra} />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6"></div>
              <Informacion info={info}/>
            <div className="col-md-6">
              <Cancion letra={letra}/>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
