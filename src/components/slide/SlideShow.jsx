import React from 'react';
import './styles.css';
import Slider from 'react-slick';
import Comments from '../comments/Comments';
SlideShow.propTypes = {

};
function SlideShow(props) {
    const settings = {
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 8000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container pb-75">
            <h3 className='feane text-center feane-heading'>What Says Our Customers</h3>
            <Slider {...settings}>
                <Comments />
                <Comments />
                <Comments />
            </Slider>
            <div className="arrows">

            </div>
        </div>

    );
}
export default SlideShow;