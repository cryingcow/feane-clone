import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../components/inputfield/InputField';
import './styles.css';
import SelectField from '../../components/selectfield/SelectField';
import Button from '../../components/button/Button';
Booking.propTypes = {

};
function Booking(props) {
    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const min = `${year}-${month}-${day}`;
    console.log(min);
    return (
        <section>
            <div className="container">
                <h3 className="feane feane-heading">
                    Book A Table
                </h3>
                <div className="flex-box booking-flex">
                    <div className="inputs">
                        <InputField placeHolder={'Your Name'} />
                        <InputField placeHolder={'Phone number'} />
                        <InputField placeHolder={'Your Mail'} />
                        <SelectField />
                        <InputField type={'date'} min={min} />
                    </div>
                    <div className="map">
                        <iframe className='if' src='https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik' />
                    </div>
                </div>
                <Button name={'BOOK NOW'} />
            </div>
        </section>
    );
}

export default Booking;