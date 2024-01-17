import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import CircleImage from '../circleImage/CircleImage';
Comments.propTypes = {

};

function Comments({ img, name }) {
    return (
        <div className="flex-box comment-box">
            <div className="comment-box-text text-white">
                <div className="text-box">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti obcaecati dolore quae explicabo repellendus, dolorum ab! Eaque reiciendis corporis voluptatibus suscipit tenetur, praesentium at!</p>
                    <h6>{name}</h6>
                    <p>magna aquila</p>
                </div>
            </div>
            <div className="comment-img">
                <CircleImage pixel={100} src={img} className="comment-image" />
            </div>
        </div>
    );
}

export default Comments;