import React, { Component } from "react";

export default class ToggleDisplay extends Component {
  constructor() {
    super();
    this.state = {
      displayBio: false,
    };
  }

  handleShow = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <h4>Chao mung den voi Rikkei Academy</h4>
        {/* Su dung toan tu 3 ngoi */}
        {this.state.displayBio ? (
          <div>
            <p>Chuc cac ban hoc tot</p>
            <button onClick={this.handleShow}>Show less</button>
          </div>
        ) : (
          <button onClick={this.handleShow}>Read more</button>
        )}
      </div>
    );
  }
}
