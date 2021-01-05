import React from 'react';
import PropTypes from 'prop-types';


const Error = ({mensaje}) => {
    return (    
        <div className="bg-pink-100 p-3 md:p-7 border-2 border-red-600 flex items-center max-h-28 justify-center text-xl text-center">
            <p>{mensaje}</p>
        </div>
     );
}

Error.ptopTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default Error;