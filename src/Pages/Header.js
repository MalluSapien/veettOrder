import React from 'react';
import Logo from './veettamma.svg';

function Header() {
  return ( 
    <>
    <div className="top-bar bg-light row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
            <small><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
            <small className="ms-4"><i className="fa fa-envelope me-2"></i>info@example.com</small>
        </div>
        <div className="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <a className="text-body ms-3" href=""><i className="bi bi-facebook"></i></a>
            <a className="text-body ms-3" href=""><i className="bi bi-youtube"></i></a>
            <a className="text-body ms-3" href=""><i className="bi bi-instagram"></i></a>
        </div>
    </div> 
    <nav className="navbar navbar-expand-sm bg-light">
    <div className="container">
      <a className="navbar-brand" href="">
     <img src={Logo} className="App-logo" alt="logo"  style={{width:'130px'}} />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <a className="nav-link" href="">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Link</a></li>
                <li><a className="dropdown-item" href="#">Another link</a></li>
                <li><a className="dropdown-item" href="#">A third link</a></li>
            </ul>
            </li>
        
          <li className="nav-item">
            <a className="nav-link" href="">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">Link</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success" type="button">Search</button>
        </form>
      </div>
    </div>
    </nav>
    
    </>
   

  
  
  )
}

export default Header