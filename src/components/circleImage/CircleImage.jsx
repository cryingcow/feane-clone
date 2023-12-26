import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
CircleImage.propTypes = {
    pixel: PropTypes.number,
    src: PropTypes.string,
};

function CircleImage(props) {
    { console.log(props) }
    return (
        <div className='deal-card-img' style={{ maxWidth: props.pixel }}>
            <img src="/assets/o1.jpg" alt="" />
        </div>
    );
}

export default CircleImage;