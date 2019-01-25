import React, { Component } from "react";
import {
  Button,
} from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: '',
    };
  }

  switch = () => {
    var mode = localStorage.getItem("mode");
    if (mode === "lightMode") {
      localStorage.setItem("mode", "nightMode");
      this.setState({ class: 'nightMode' });
    } else {
      localStorage.setItem("mode", "lightMode");
      this.setState({ class: 'lightMode' });
    }
  };

  componentDidMount = () => {
    var mode = localStorage.getItem("mode");
        if (mode) {
          this.setState({ class: mode });
    } else {
      this.setState({ class: 'default' });
    }
  };

  render() {
    return (
      <div className="App">
        <div className={this.state.class}>
            <Button
              className="mt-5 mb-5 pl-5 pr-5"
              onClick={this.switch}
              color="warning"
              active
            >
              Toggle
            </Button>
        </div>
      </div>
    );
  }
}

export default App;
