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
        className="Secciones"
        onSubmit={obtenerDatos}
        >
            <h2>Coloca tu Ciudad y País</h2>
            <label>Ciudad:</label>
            <input
                type="text"
                name="ciudad"
                placeholder="Ej. Guadalajara"
                className="input"
                value={ciudad}
                onChange={actualizarBusqueda}
            />
            <label>País:</label>
            <select
             className="input" 
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
                className="boton"
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