import React, { Component } from 'react'
import '../styles/Footer.css'
export class Footer extends Component {
    render() {
        return (
            <div id="contacto" className="bg-dark">
                <div className="container section">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="section_title">
                                ¡Ponte en contacto!
                            </p>
                        </div>
                    </div>
                    <div className="row contacts">
                        <div className="col-md-5 col-lg-4">
                            <div className="contact_list">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className="row container th">Teléfono</th>
                                            <td className="container td">3197287605</td>
                                        </tr>
                                        <tr>
                                            <th className="row container th">Email:</th>
                                            <td className="container text td"><a href="gmail.com"> villegas4006@gmail.com</a></td>
                                        </tr>
                                        <br/><br/>
                                        <tr>
                                           <a href="https://www.facebook.com/miguel.montoya.52643"><th className="row container sc" >Facebook</th></a> 
                                           <a href="https://www.linkedin.com/in/miguel-angel-montoya-villegas-99206018a/"><th className="row container sc" >Linkedin</th></a> 
                                           <a href="https://github.com/Villegas-06?tab=repositories"><th className="row container sc" >Github</th></a> 
                                           <a href="https://twitter.com/villegas4006"><th className="row container sc" >Twitter</th></a> 
                                        </tr>
                                    </tbody>
                                    
                                </table>
                                
                                
                                <br/>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-5">
                            <div className="contacts_form_div">
                                <p className="contacts_form">
                                    O simplemente escríbeme aquí.
                                </p>
                                <form className="container">
                                    <div className="form-group">
                                        <input type="text" className="form-field" placeholder="Tu nombre"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="Email" className="form-field" placeholder="Tu email"/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" id="" cols="30" rows="10" className="form-field" placeholder="Escribe tu mensaje aquí"></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg_derechos d-flex justify-content-center fixed-bottom mt-5">
                    <h4 className="text-light">@Todos los derechos reservados-2019</h4>
                </div>
            </div>
        )
    }
}

export default Footer
