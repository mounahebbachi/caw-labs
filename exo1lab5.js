import React, { Component } from 'react';

class ClickMeButton extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>ClickMe</button>
        {this.state.clicked && <p>Clicked</p>}
      </div>
    );
  }
}

export default ClickMeButton;
