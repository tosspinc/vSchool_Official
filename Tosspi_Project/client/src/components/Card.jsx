import React from "react";

export default function Card(props) {
    return (        /*using a process called interpolation adding in the js code using the {}*/
        <div className="card">
            <img src="./imgs/product-categories/tools.jpg" className="card-tool-image" />
            <div className="card-reviews">
                <img src="./imgs/product-reviews/five-star-review.png" className="five-star-review" />
                <span className="gray">{props.rating}</span>
                <span className="gray">({props.reviewCount}) </span>
            </div>
            <p><span className="item-description">{props.title}</span></p>
            <p><span className="item-pricing">starting at $ {props.price}.00 Each.</span></p>
        </div>
    )
}   