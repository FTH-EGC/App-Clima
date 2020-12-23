import React from 'react';
import Iconos from './Iconos';
import PropTypes from 'prop-types';


const Resultado = ({resultado}) => {

    const {name, main, sys, weather} = resultado;

    if(!name) return null;

    const kelvin = 273.15; 

    return ( 
        <div className="Secciones resultado">
            <h2>{name} - {sys.country}</h2>
            <div className="resultados">
                <p>Temperatura Actual: <span className="grados">{parseFloat(main.temp - kelvin, 10).toFixed(2)}°</span></p>
                <p>Temperatura Minima: <span className="grados">{parseFloat(main.temp_min - kelvin, 10).toFixed(2)}°</span></p>
                <p>Temperatura Máxima: <span className="grados">{parseFloat(main.temp_max - kelvin, 10).toFixed(2)}°</span></p>
                <p>Humedad: <span className="grados">{main.humidity}%</span></p>
            </div>
            <div className="info-actual">
                <div className="icono">
                    <Iconos
                        resultado={resultado}
                    />
                </div>
                <div className="desc-actual">
                    <p> <span>{weather[0].description}</span></p>
                </div>
            </div>
        </div>
     );
}
 
Resultado.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Resultado;