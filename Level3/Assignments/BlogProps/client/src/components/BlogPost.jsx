import React from "react";

export default function BlogPost(props) {
    return (
        <div className="blog-container">
            <div className="blog-card">
                <a href="#" className="blog-title-link">
                    <h2 className="blog-title">{props.title}</h2>
                    <h3 className="blog-subtitle">{props.subTitle}</h3>
                </a>
                <p className="blog-data">Posted By: <a href="#" className="blog-author">{props.author}</a>dated: {props.date}</p>
            </div>
        </div>
    )
}