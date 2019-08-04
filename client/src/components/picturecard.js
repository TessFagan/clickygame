import React from "react";
import "./style.css";
import "./friends.json";

function PictureCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default PictureCard;