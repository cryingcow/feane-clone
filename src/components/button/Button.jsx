import React from 'react';
import './styles.css';
function Button({ name }) {
    return (
        <a className='button'>
            {name}
        </a>
    );
}

export default Button