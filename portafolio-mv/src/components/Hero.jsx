import React from 'react';
import '../styles/Hero.css';
import LogoM from '../images/letra_m.jpg';
class Hero extends React.Component{
    render (){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="container">
                            <img className="hero_img" src={LogoM} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;