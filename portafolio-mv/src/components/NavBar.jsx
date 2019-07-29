import React from 'react'

class NavBar extends React.Component{
    render(){
        return(

    <div className="container">
        <div className="row">
            <div className="col-6">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item-active">
                        <a href="#" className="nav-link">Habilidades</a>
                        </li>
                        <li className="nav-item-active">
                            <a href="#" className="nav-link">Sobre Mi</a>
                        </li>
                        <li className="nav-item-active">
                            <a href="#" className="nav-link">Portafolio</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}



export default NavBar;