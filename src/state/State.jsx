import React, { Component } from 'react';

class Kursus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paket: "kursus programming",
            materi: "React js",
            desc: "belajar react js",
            harga: 2000000
        };
    }
    render() {
        return (
            <div className="header">
                <div className="container warna">
                    <nav className="navbar navbar-expand-lg navbar-light warna">
                        <a className="navbar-brand" to=""><img className="logo" src={require('../logo/logo.png')}/></a>
                        {/* <h1>Nama paket      : {this.state.paket}</h1><br />
                        <h1>Jenis Materi    : {this.state.materi}</h1> <br />
                        <h1>Deskripsi Paket : {this.state.desc}</h1> <br />
                        <h1>Harga           : {this.state.harga}</h1> <br /> */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PROMO</a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PAKET & ADD-ON</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" to="">Action</a>
                                        <a class="dropdown-item" to="">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a class="dropdown-item" to="">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a className="nav-link text-white">PUSAT BANTUAN</a>
                                </li>
                                <li class="nav-item dropdown"> 
                                    <a class="nav-link dropdown-toggle text-white" to="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                        INFO TERKINI</a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown"> 
                                        <a class="dropdown-item" to="">News</a>
                                        <a class="dropdown-item" to="">Event</a>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        );
    }
}

export default Kursus;