import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
SelectField.propTypes = {

};

function SelectField(props) {
    return (
        <>
            <select>
                <option id='placeHolder' selected>How many persons?</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </>
    );
}

export default SelectField;