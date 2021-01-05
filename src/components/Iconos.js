import React from 'react';
import {imagenes} from '../assets/imagenes';
import PropTypes from 'prop-types';

const Iconos = ({resultado}) => {


    const {weather} = resultado;

    let icono;
    if(weather[0].main === "thunderstorm" ) {
        icono = imagenes.img10;
    }
    if(weather[0].main === "Drizzle" ) {
        icono = imagenes.img9;
    }
    if(weather[0].main === "Snow" ) {
        icono = imagenes.img6;
    }
    if(weather[0].main === "Clear" ) {
        icono = imagenes.img1;
    }
    if(weather[0].icon === "50n" ) {
        icono = imagenes.img5;
    }

    switch(weather[0].description){
        case 'light rain':
            icono = imagenes.img8;
        break;
        case 'moderate rain':
            icono = imagenes.img8;
        break;
        case 'heavy intensity rain':
            icono = imagenes.img8;
        break;
        case 'very heavy rain':
            icono = imagenes.img7;
        break;
        case 'extreme rain':
            icono = imagenes.img7;
        break;
        case 'freezing rain':
            icono = imagenes.img12;
        break;
        case 'light intensity shower rain':
            icono = imagenes.img9;
        break;
        case 'shower rain':
            icono = imagenes.img9;
        break;
        case 'heavy intensity shower rain':
            icono = imagenes.img9;
        break;
        case 'ragged shower rain':
            icono = imagenes.img9;
        break;

        default:

        break;

    }
    switch(weather[0].description){
        case 'few clouds':
            icono = imagenes.img2;
        break;
        case 'scattered clouds':
            icono = imagenes.img4;
        break;
        case 'broken clouds':
            icono = imagenes.img13;
        break;
        case 'overcast clouds':
            icono = imagenes.img13;
        break;

        default:

        break;

    }



    return ( 
        <img src={icono} alt="iconos clima" className="h-14"/>

     );
}
 

Iconos.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Iconos;