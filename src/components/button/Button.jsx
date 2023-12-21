import React from 'react';
import './styles.css';
function Button(props) {
    return (
        <a className='button'>
            {props.name}
        </a>
    );
}

export default Button