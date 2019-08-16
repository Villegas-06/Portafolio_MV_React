import React, { Component } from 'react';
import Foto from '../images/hero.jpg';
import '../styles/Hero.css'
export class Hero extends Component {
    render() {
        return (
            <header className="main-header mt">
                <br/><br/>
                <div className="row personal-profile">
                    <div className="container col-row-5 personal-profile__contact mb-5 ">
                        <p className="personal-profile__name">
                            Miguel Angel Montoya Villegas
                        </p>
                        <p className="personal-profile__work">
                            Desarrollador FrontEnd
                        </p>
                        <br/>
                        <table>
                            <tbody>
                            <tr>
                                <th className="row container">Edad:</th>
                                <td className="container mt-1">18</td>
                            </tr>
                            <tr>
                                <th className="row container">Teléfono:</th>
                                <td className="container">3197287605</td>
                            </tr>
                            <tr>
                                <th className="row container">Email:</th>
                                <td className="container text-white"><a href="gmail.com"> villegas4006@gmail.com</a></td>
                            </tr>
                            <tr>
                                <th className="row container">Dirección:</th>
                                <td className="container">Kr72B#92B77</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </header>
        )
    }
}

export default Hero
