import React from 'react';
import './styles.css';
import Button from '../../components/button/Button';
function About(props) {
    return (
        <section>
            <div className='container'>
                <div className="flex-box about-flex-box">
                    <div className="about-img-box">
                        <img src="/assets/about-img.png" className='about-img' alt="error" />
                    </div>
                    <div className="info-about text-white">
                        <h2 className='feane'>We Are Feane</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All

                        </p>
                        <Button name={'Read More'} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;