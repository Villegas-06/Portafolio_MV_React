import React, { Component } from 'react'
import '../styles/Testimonios.css'
export class Testimonios extends Component {
    render() {
        return (
            <section className="container ">
                 <div className="row">
                    <div className="col-md-12">
                        <h2  id="testimonios" className="testimonio_title">
                            Testimonios
                        </h2>
                        <br/>
            <div id="carouselExampleFade" className="carousel slide carousel-fade testimonio_bg" data-ride="carousel">
            <div className="carousel-inner container">
                <div className="carousel-item active">
                    <h2 className=" testimonio_title">Alexander Chavarria </h2>
                    <h5 className=" testimonio_subtitle">Proyecto: Kalimboor</h5>
                    <div className="container">
                    <p className="testimonio_txt">Una persona honesta, responsable, amigable y buena para trabajar en equipo. <br/>
                    Durante el proyecto Kalimboor se destacó por su colaboración y entrega.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <h2 className=" testimonio_title">Marian Valencia</h2>
                    <h5 className=" testimonio_subtitle">Proyecto: Kalimboor</h5>
                    <div className="container">
                    <p className="testimonio_txt">Sinceramente, es una persona con la cual es fácil trabajar, tiene varias capacidades y 
                    entiende muy fácil a las personas. <br/>
                    En nuestro trayecto en el proyecto fue muy colaborativo, ayudándonos con nuestros problemas y sobrepasando nuestras dificultades.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <h2 className="testimonio_title">Ana Maria Acevedo</h2>
                    <h5 className=" testimonio_subtitle">Proyecto:Apprendizaje</h5>
                    <div className="container">
                    <p className="testimonio_txt">¿Qué puedo decir?, Miguel es una persona muy colaborativa, honesta, responsable y 
                    dedicado a todo lo que hace. <br/>
                    Durante nuestro proyecto, Apprendizaje, nos ayudó a resolver muchas dudas, además, durante nuestros trabajos, era muy 
                    responsable con todo lo que hacía.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon testimonio_bg_arrow" aria-hidden="true"></span>
                <span className="sr-only bg-secondary">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon testimonio_bg_arrow" aria-hidden="true"></span>
                <span className="sr-only bg-secondary">Next</span>
            </a>
            </div>
            </div>
        </div>
        <hr/>
        </section>
        )
    }
}

export default Testimonios
