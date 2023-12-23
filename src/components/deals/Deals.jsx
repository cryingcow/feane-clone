import React from 'react';
import DealCard from '../deal-card/DealCard';
import './styles.css'
function Deals(props) {
    return (
        <section className='deal-section'>
            <div className="container">
                <div className="flex-box deal-container">
                    <div className="deal-left">
                        <DealCard />
                    </div>
                    <div className="deal-right">
                        <DealCard />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Deals;