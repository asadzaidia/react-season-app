import React from "react";

class Spinner extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <p></p>
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      </div>
    );
  }
}

export default Spinner;
