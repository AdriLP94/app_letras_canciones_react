import React from 'react';

const Informacion = ({info}) => {

    if(Object.keys(info).length ===0) return null;

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="card-body">
                <div>
                    <img src={info.strArtistLogo} alt="Logo"/>
                    <img src={info.strArtistThumb} alt="Foto"/>
                    <h2 className="card-text text-center">Biografía</h2>
                    <p className="card-text">{info.strBiographyES}</p>
                    <p className="card-text">
                        <a href={`http://${info.strFacebook}`} target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`http://${info.strTwitter}`} target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`http://${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer"> 
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default Informacion;