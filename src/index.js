import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const sliderElements = [
  { id: 1, description: 1 },
  { id: 2, description: 2 },
  { id: 3, description: 3 }
];

class VerticalAndFade extends Component {
  state = { currentSlide: 0 };

  handleAfterChange = index => {
    console.log("after change", index);
    this.setState({
      currentSlide: index
    });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      vertical: true,
      // verticalSwiping: true,
      fade: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: this.handleAfterChange
    };
    return (
      <div>
        <h2>Vertical & Fade Mode</h2>
        <Slider {...settings}>
          {sliderElements.map(element => (
            <div key={element.id}>
              <h3>{element.description}</h3>
            </div>
          ))}
        </Slider>
        <div>
          {" "}
          {this.state.currentSlide + 1} / {sliderElements.length}{" "}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<VerticalAndFade />, document.getElementById("root"));
