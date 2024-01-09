import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/card/Card';
import './styles.css';
import foods from '../../data/data.json';
Menu.propTypes = {

};

function Menu(props) {

    const [value, setValue] = useState('');
    const [filterdFoods, setFilteredFoods] = useState(foods);
    const handleClick = (e) => {
        const value = e.target.getAttribute('value');
        setValue(value);
    }
    useEffect(() => {
        const filterList = document.querySelectorAll('.menu-buttons li')
        filterList.forEach(
            filter => {
                if (filter.getAttribute('value') == value) {
                    filter.classList.add('active');
                } else filter.classList.remove('active');
            }
        )
        if (value != '') {
            setFilteredFoods(foods.filter((food) => food.category == value));
        }
        else setFilteredFoods(foods);

    }, [value])
    return (
        <section className='menu-section'>
            <div className="container">
                <h3 className='feane feane-heading text-center'>Our Menu</h3>

                <div className="menu-bar">
                    <ul className='menu-buttons'>
                        <li value={''} onClick={handleClick}>All</li>
                        <li value={'burger'} onClick={handleClick} >Burger</li>
                        <li value={'pizza'} onClick={handleClick}>Pizza</li>
                        <li value={'pasta'} onClick={handleClick}>Pasta</li>
                        <li value={'fries'} onClick={handleClick}>Fries</li>
                    </ul>
                </div>
                <div className="flex-box card-items">
                    {filterdFoods.map((food) => (
                        <div className="cards-box">
                            <Card name={food.name} img={food.image} des={food.description} price={food.price} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;