import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/shoppingcart/shoppingcart';


function Card({ food }) {
    const { cart, quantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div className='card'>
            <div className="card-img-box">
                <img src={food.image} alt="error" />

            </div>
            <div className="info-box">
                <div className="info-container">
                    <div className="des">
                        <h3>
                            {food.name}
                        </h3>
                        <p>
                            {food.description}
                        </p>
                    </div>
                    <div className="pnc">
                        <p className="price">{food.price}$</p>
                        <div className="cart">
                            <FaShoppingCart onClick={() => dispatch(addToCart(food))} className='cart-item' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;