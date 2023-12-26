import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button from '../button/Button';
import CircleImage from '../circleImage/CircleImage';
DealCard.propTypes = {

};

function DealCard(props) {
    return (
        <div className='deal-card-box flex-box'>
            {/* <div className="deal-card-img">
                <img src="/assets/o1.jpg" alt="" />
            </div> */}
            <CircleImage pixel={165} />
            <div className="deal-info text-white">
                <h3 className='feane'>
                    Tasty Thursdays
                </h3>

                <div className="feane discount">
                    <h6>
                        <span>
                            15%
                        </span>

                        Off
                    </h6>
                </div>
                <Button name={'Add To Cart'} />
            </div>
        </div>
    );
}

export default DealCard;