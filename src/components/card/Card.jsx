import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { FaShoppingCart } from "react-icons/fa";

function Card({ name, img, des, price }) {
    return (
        <div className='card'>
            <div className="card-img-box">
                <img src={img} alt="error" />

            </div>
            <div className="info-box">
                <div className="info-container">
                    <div className="des">
                        <h3>
                            {name}
                        </h3>
                        <p>
                            {des}
                        </p>
                    </div>
                    <div className="pnc">
                        <p className="price">{price}$</p>
                        <div className="cart">
                            <FaShoppingCart className='cart-item' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;