import React from "react";

export default function ProductCategories() {
    return (
        <product-section>
            <h3 className="product-categories-title">Product Categories:</h3>
            
            <img src="./imgs/product-categories/mens.svg" alt="mens" className="mens-clothing-pic"/>
            <img src="./imgs/product-categories/womens.svg" alt="womens" className="womens-clothing-pic"/>
            <img src="./imgs/product-categories/toys.svg" alt="toys" className="toys-pic"/>
            <img src="./imgs/product-categories/sports.svg" alt="sports" className="sports-pic"/>
            <img src="./imgs/product-categories/tools.svg" alt="tools" className="tools-pic"/>
            <img src="./imgs/product-categories/pets.svg" alt="pets" className="pets-pic"/>
        </product-section>

    )
}