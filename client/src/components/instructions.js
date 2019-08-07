import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'

function Instructions() {
    return <div>
        <Jumbotron id="instruct">
            <h3>Click on an image to earn points, but don't click on any image more than once, or you lose!</h3></Jumbotron>
    </div>;
}

export default Instructions;