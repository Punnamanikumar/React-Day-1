import React, { Component } from "react";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";

class ReactFeatures extends Component {
  render() {
    return (
      <div>
        <pre>
          <h1>REACT</h1>
          <h3 style={{ color: "red" }}>
            Features of React (or) React v/s Angular v/s Vue (or) Why you Choose
            React (or) Why React is SoPowerful
          </h3>
          <h3>1)Single Page Application</h3>
          <h3>2)Component Structure</h3>
          <h3>3)Virtual DOM</h3>
          <h3>4)JSX</h3>
          <h3>5)Easy Learning Curve</h3>
          <h3>6)React Native</h3>
        </pre>

        <br />
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
      </div>
    );
  }
}

export default ReactFeatures;
