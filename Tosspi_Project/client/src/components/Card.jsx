import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img src="./imgs/product-categories/tools.jpg" className="card-tool-image" />
            <div className="card-reviews">
                <img src="./imgs/product-reviews/five-star-review.png" className="five-star-review" />
                <span className="gray"> 5.0  </span>
                <span className="gray">(6) </span>
            </div>
            <p><span className="item-description">Every day tools.</span></p>
            <p><span className="item-pricing">starting at $5.00 Each.</span></p>
        </div>
    )
}