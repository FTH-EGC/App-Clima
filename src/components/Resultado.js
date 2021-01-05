import React from 'react';
import Iconos from './Iconos';
import PropTypes from 'prop-types';


const Resultado = ({resultado}) => {

    const {name, main, sys, weather} = resultado;

    if(!name) return null;

    const kelvin = 273.15; 

    return ( 
        <div className="bg-indigo-50 p-10 rounded-3xl flex flex-col mb-10 md:mb-0">
            <h2 className="text-center mb-10 font-medium text-3xl">{name} - {sys.country}</h2>
            <div className="resultados">
                <p className="font-medium text-3xl my-5">Temperatura Actual: <span className="font-normal text-3xl">{parseFloat(main.temp - kelvin, 10).toFixed(2)}°</span></p>
                <p className="font-medium my-3 text-2xl">Temperatura Minima: <span className="font-normal text-2xl">{parseFloat(main.temp_min - kelvin, 10).toFixed(2)}°</span></p>
                <p className="font-medium my-3 text-2xl">Temperatura Máxima: <span className="font-normal text-2xl">{parseFloat(main.temp_max - kelvin, 10).toFixed(2)}°</span></p>
                <p className="font-medium my-3 text-2xl">Humedad: <span className="font-normal text-2xl">{main.humidity}%</span></p>
            </div>
            <div className="grid grid-cols-2 mt-10 items-center">
                <div className="text-4xl font-medium">
                    <p> <span>{weather[0].description}</span></p>
                </div>
                <div className="">
                    <Iconos
                        resultado={resultado}
                    />
                </div>
            </div>
        </div>
     );
}
 
Resultado.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Resultado;