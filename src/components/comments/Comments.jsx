import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import CircleImage from '../circleImage/CircleImage';
Comments.propTypes = {

};

function Comments(props) {
    return (
        <section>
            <div className="container">
                <div className="flex-box comment-box">
                    <div className="comment-box-text text-white">
                        <div className="text-box">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deleniti obcaecati dolore quae explicabo repellendus, dolorum ab! Eaque reiciendis corporis voluptatibus suscipit tenetur, praesentium at!</p>
                            <h6>Khang</h6>
                            <p>magna aquila</p>
                        </div>
                    </div>
                    <div className="comment-img">
                        <CircleImage pixel={100} className="comment-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments;