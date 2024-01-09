import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
SelectField.propTypes = {

};

function SelectField(props) {
    return (
        <div className='select-wrapper'>
            <select id='select' name='select'>
                <option selected disabled>How many persons?</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    );
}

export default SelectField;