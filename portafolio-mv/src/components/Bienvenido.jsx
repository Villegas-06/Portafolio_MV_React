import React, { Component } from 'react';
import '../styles/Bienvenido.css'

export class Bienvenido extends Component {
    render() {
        return (
            <section id="bienvenido" className="container mt-5">
                <div className="row">
                    <div className="col-md-10">
                    <h2 className="h2">Bienvenido</h2>
                    <p className="section Bienvenido_div_txt">Soy desarrollador web junior 
                    capaz de construir una presencia web desde cero: <br/> desde el concepto, 
                    la navegación, el diseño y la programación hasta UX y UI. <br/>
                    Habilidad para escribir código bien diseñado, comprobable y eficiente utilizando <br/> las mejores prácticas 
                    actuales en desarrollo web. Aprendiz rápido y trabajador en equipo.</p>
                    </div>
                </div>
                <hr/>
            </section>
        );
    }
}

export default Bienvenido
