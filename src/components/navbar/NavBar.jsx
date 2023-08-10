import React from 'react'
import './NavBar.css'
import 'bootstrap'
import Logo from '../../assets/images/logo.png'

const NavBar = () => {
    return (
        <div>
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="logo-img" className='img-logo' />
                            <span className='pass-text'>PA</span><span className='s-text'>S</span><span className='pa-text'>S</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                            <ul className="navbar-nav text-center mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link nav-home" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Platforms</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Vendors
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Sellers</a></li>
                                        <li><a className="dropdown-item" href="#">Services</a></li>
                                        <li><a className="dropdown-item" href="#">Properties</a></li>
                                        <hr />
                                        <li><a className="dropdown-item" href="#">Account</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <div className="buttons">
                                    <button className='btn-login'>LOGIN</button>
                                    <button className='btn-get'>GET STARTED</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
