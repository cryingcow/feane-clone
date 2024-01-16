import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import CircleImage from '../circleImage/CircleImage';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../features/shoppingcart/shoppingcart';
CartItems.propTypes = {

};

function CartItems({ props }) {
    const quantity = useSelector((state) => state.cart.quantity);
    const dispatch = useDispatch();
    return (
        <div className='flex-box item'>
            {console.log(props)}
            <div className="flex-box wrapper">
                <div className="item-image">
                    <CircleImage pixel={100} src={props.image} />
                </div>
                <div className="item-info">
                    <h3 className="name feane">
                        {props.name}
                    </h3>
                    <span>{props.price} $</span>
                    <div className="quantity-adjust flex-box">
                        <button className='btn-adjust' disabled={quantity[props.id] == 0} onClick={() => dispatch(decreaseQuantity(props.id))}>-</button>
                        <span className='quantity' >{quantity[props.id]}</span>
                        <button className='btn-adjust' onClick={() => dispatch(increaseQuantity(props.id))}>+</button>
                    </div>

                </div>
            </div>
            <div className="remove-item-btn">
                <span className='remove-btn' onClick={() => dispatch(removeFromCart(props.id))}>REMOVE</span>
            </div>
        </div>
    );
}

export default CartItems;