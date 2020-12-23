import React from 'react';
import PropTypes from 'prop-types';


const Error = ({mensaje}) => {
    return (    
        <div className="error">
            <p>{mensaje}</p>
        </div>
     );
}

Error.ptopTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default Error;