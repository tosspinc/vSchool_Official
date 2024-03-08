    import React from "react"
    import ProductCategories from "./ProductCategories"
    // import logo from "../imgs/Tosspi_Logo.png"

    export default function NavigationBar() {
        return (
            <div>
                <nav className="navbar-top">
                    <div className="navleft-company-logos">
                        <img src="./imgs/Tosspi_Logo.png" className="tosspi-bag-logo" />
                        <img src="./imgs/Transp_Tosspi_logo.png" className="tosspi-logo" />
                    </div>
                    <div className="navcenter-search">
                        <div className="search-container">
                            <button type="submit" className="all"> All <i className="fa fa-sort-desc"></i></button>
                            <input type="text" placeholder="Search for items here..." />
                            <button type="submit" className="search"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="navright-login">
                        <img src="./imgs/Login.jpg" className="login-logo" />
                        <div className="navright-shopping-cart">
                            <img src="./imgs/shopping-cart.jpg" className="cart-logo" />
                        </div>
                    </div>
                </nav>
                <nav className="navbar-bottom">
                    <div className="main-categories">
                        <img src="./imgs/product-categories/Product-Categories.jpg" className="product-categories-logo" />
                        { <ProductCategories /> }
                        <img src="./imgs/product-categories/view-all.png" className="view-all-categories-img" />
                    </div>
                </nav>    
            </div>
        );
    }