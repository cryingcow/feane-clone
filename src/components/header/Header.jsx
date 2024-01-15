import React, { useState } from 'react';
import './styles.css';
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu, IoCloseOutline } from "react-icons/io5";
import MediaQuery from 'react-responsive';
import { useSelector } from 'react-redux';
Header.propTypes = {

};

function Header(props) {
    const cartItems = useSelector((state) => state.cart.cart);
    const count = Object.keys(cartItems).length;
    const [isActive, setIsActive] = useState(false);

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
                            <div className="icon"><FaShoppingCart />
                                {(count == 0 ? <div></div> : <div className="cart-count">{count}</div>)}</div>
                        </div>
                    </div>
                    <div className="cart-bar">
                        <div className=""><IoCloseOutline /></div>
                    </div>
                </div>
                <div className='spacing'></div>
            </MediaQuery>
            <MediaQuery maxWidth={642}>

                <div className="nav">
                    <div className="container">

                        <div onClick={handleClick} className="icon">
                            <IoMenu />
                        </div>

                    </div>
                </div>
                <div id='menu-mobile' className="menu-mobile">
                    <div onClick={handleClick} className='text close-btn'><IoCloseOutline /></div>
                    <div className="feane text">
                        <span>Feane</span>
                    </div>
                    <ul className='mobile' >
                        <li><a href='#menu-section'>MENU</a></li>
                        <li><a href='#about-section'>ABOUT</a></li>
                        <li><a href='#booking-section'>BOOKING</a></li>
                    </ul>
                    <div className="icon"><FaShoppingCart /></div>
                </div>
            </MediaQuery>
        </>
    );
}

export default Header;