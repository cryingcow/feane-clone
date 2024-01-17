import React, { useState } from 'react';
import './styles.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import MediaQuery from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../features/shoppingcart/shoppingcart';
import CartItems from '../cartItems/CartItems';
Header.propTypes = {

};

function Header(props) {
    const cart = useSelector((state) => state.cart.cart);
    const count = Object.keys(cart).length;
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {

        setIsActive(!isActive);
        const el = document.getElementById('menu-mobile');
        if (isActive) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }

    }
    return (
        <>
            <MediaQuery minWidth={643}>
                <div className='nav'>
                    <div className='container'>
                        <div className='flex-box'>
                            <div className="feane text">
                                <span>Feane</span>
                            </div>
                            <ul className='ul-nav'>
                                <li><a href='#menu-section'>MENU</a></li>
                                <li><a href='#about-section'>ABOUT</a></li>
                                <li><a href='#booking-section'>BOOKING</a></li>
                            </ul>
                            <div className="icon" onClick={() => document.getElementById('cart-bar').classList.add('active-bar')}><FaShoppingCart />
                                {(count == 0 ? <div></div> : <div className="cart-count">{count}</div>)}</div>
                        </div>
                    </div>
                    <div id="cart-bar">
                        <div className="close-cart-btn" >
                            <IoCloseOutline onClick={() => document.getElementById('cart-bar').classList.remove('active-bar')} />
                        </div>
                        {(count == 0 ? <h1 className='empty-cart'>Your Cart is empty</h1> : <div className="container">
                            <div className="flex-box cart-items">
                                {Object.values(cart).map((cart) => <CartItems props={cart} />)}
                            </div>
                        </div>)}
                        <div className="remove-all-btn" onClick={() => dispatch(clearCart())}>
                            REMOVE ALL
                        </div>
                    </div>
                </div>
                <div className='spacing'></div>
            </MediaQuery>
            <MediaQuery maxWidth={642}>

                <div className="nav">
                    <div className="container flex-box">

                        <div onClick={handleClick} className="icon">
                            <IoMenu />
                        </div>
                        <div className="icon" onClick={() => document.getElementById('cart-bar').classList.add('active-bar')}><FaShoppingCart />
                            {(count == 0 ? <div></div> : <div className="cart-count">{count}</div>)}</div>
                    </div>
                    <div id="cart-bar">
                        <div className="close-cart-btn" >
                            <IoCloseOutline onClick={() => document.getElementById('cart-bar').classList.remove('active-bar')} />
                        </div>
                        {(count == 0 ? <h1 className='empty-cart'>Your Cart is empty</h1> : <div className="container">
                            <div className="flex-box cart-items">
                                {Object.values(cart).map((cart) => <CartItems props={cart} />)}
                            </div>
                        </div>)}
                        <div className="remove-all-btn" onClick={() => dispatch(clearCart())}>
                            REMOVE ALL
                        </div>
                    </div>
                </div>
                <div id='menu-mobile' className="menu-mobile">
                    <div className="feane text">
                        <span>Feane</span>
                    </div>
                    <ul className='mobile' >
                        <li><a href='#menu-section'>MENU</a></li>
                        <li><a href='#about-section'>ABOUT</a></li>
                        <li><a href='#booking-section'>BOOKING</a></li>
                    </ul>

                </div>

            </MediaQuery>
        </>
    );
}

export default Header;