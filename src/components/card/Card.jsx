import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { FaShoppingCart } from "react-icons/fa";

function Card(props) {
    return (
        <div className='card'>
            <div className="card-img-box">
                <img src="/assets/f1.png" alt="error" />

            </div>
            <div className="info-box">
                <div className="info-container">
                    <div className="des">
                        <h3>
                            Seafood Pizza
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro asperiores pariatur, ratione similique enim libero magnam!
                        </p>
                    </div>
                    <div className="pnc">
                        <p className="price">20$</p>
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