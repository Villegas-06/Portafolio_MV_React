import React from 'react';
import '../styles/Navbar.css'

class NavBar extends React.Component{
  render(){
    return(
      
      <div className="conatiner">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container">
  <a class="navbar-brand" href="#">
          <img  alt=""/>
        </a>
    <button className="navbar-toggler nav_btn" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon nav_btn "></span>
        </button>
    <div className="collapse navbar-collapse container" id="navbarResponsive">
      <ul className="navbar-nav ml-auto nav_text">
        <li className="nav-item">
          <a className="nav-link" href="#">Bienvenido</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portafolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Testimonios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default NavBar;  