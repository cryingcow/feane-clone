import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
InputField.propTypes = {
    placeHolder: PropTypes.string,
    type: PropTypes.string,

};

function InputField({ placeHolder, type, min }) {
    return (
        <>
            <input placeholder={placeHolder} type={type} min={min} />
        </>
    );
}

export default InputField;