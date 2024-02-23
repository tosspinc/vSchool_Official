import React from "react"
import ProductCategories from "./ProductCategories"
// import logo from "../imgs/Tosspi_Logo.png"

export default function Header() {
    return (
        <header className="navbar-header">
            <nav className="navbar-main">
                <div className="nav-left">
                <img src="./imgs/Tosspi_Logo.png" className="tosspi-bag-logo" />
                <img src="./imgs/Transp_Tosspi_logo.png" className="nav-logo" />
                
                </div>
                <div className="nav-center">

                </div>
                <div className="nav-right">
                <img src="./imgs/Login.jpg" className="login-logo" />
                </div>
                <div className="navbar-categories">
                    <ProductCategories />
                </div>
            </nav>    
        </header>
    )
}