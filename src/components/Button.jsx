import React from 'react';
import './Button.css';

// recebendo a função onClick que será chamada no onClick
const Button = ({children, onClick}) => {
    return ( 
        <button onClick={onClick} className="button">
            {children}
        </button>
     )
}

/**
 * o children é o filho do button na chamada do componente, ex:
 * <button>
 * Eu sou o filho
 * </button>
 */
export default Button