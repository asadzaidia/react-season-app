import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat) {
      return <Spinner />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
