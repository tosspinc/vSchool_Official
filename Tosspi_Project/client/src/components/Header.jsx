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
                <div className="nav-search">
                    <div className="box">
                        <button type="submit" className="all"> All <i className="fa fa-sort-desc"></i></button>
                        <input type="text" /><button type="submit" className="search"><i className="fa fa-search"></i></button>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="item">
                        <img src="./imgs/flag-usa.jpg" className="flag-usa" />
                    </div>
                    <div className="item">
                        <p>Hello!</p>
                        <h5>Account & Lists
                        <i className="fa fa-sort-desc"></i></h5>
                    </div>
                    <div className="item">
                        <p>Returns</p>
                        <h5>and Orders</h5>
                    </div>
                    <div className="item">
                        <i className="fa fa-shopping-cart fa-2x"></i>Cart</div>
                        <img src="./imgs/Login.jpg" className="login-logo" />
                </div>
                <div className="navbar-categories">
                    <ProductCategories />
                </div>
            </nav>    
        </header>
    )
}