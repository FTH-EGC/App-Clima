import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    const [error, guardarError] = useState(false);

    const {ciudad, pais} = busqueda;

    const actualizarBusqueda = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const obtenerDatos = e => {
        e.preventDefault();
        if(ciudad.trim() === "" || pais.trim() === ""){
            guardarError(true);
            return;
        }        
        guardarError(false);
        guardarConsultar(true);

    }


    return ( 
            <form 
            className="bg-indigo-50 p-10 rounded-3xl flex flex-col text-xl"
            onSubmit={obtenerDatos}
            >
                <h2 className="text-center mb-10 font-medium text-3xl">Coloca tu Ciudad y País</h2>
                <label>Ciudad:</label>
                <input
                    type="text"
                    name="ciudad"
                    placeholder="Ej. Guadalajara"
                    className="p-2 bg-white rounded-md border-2 border-gray-300 mt-3 mb-3"
                    value={ciudad}
                    onChange={actualizarBusqueda}
                />
                <label>País:</label>
                <select
                className="p-2 bg-white rounded-md border-2 border-gray-300 mt-3 mb-3" 
                name="pais"
                value={pais}
                onChange={actualizarBusqueda}
                >
                    <option disabled value="">--Seleccione--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="CA">Canada</option>
                    <option value="FR">Francia</option>
                    <option value="BR">Brasil</option>
                </select>
                {error  ? <Error mensaje="Todos los campos son obligatorios" /> : null}
                <input
                    type="submit"
                    className="bg-white hover:bg-gray-700 text-black hover:text-white transition-all duration-500 ease-in-out cursor-pointer border-2 border-gray-300 my-10 p-3 font-medium text-xl"
                    value="Ver Clima"
                />
            </form>
     );
}
 
Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}

export default Formulario;