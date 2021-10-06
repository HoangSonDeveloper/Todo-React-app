import React, { Component } from "react";

class Footerbtn extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onModeChange("add");
          }}
          style={{ color: "white" }}
          className="btn btn-sm"
        >
          <i className="fa fa-plus"></i>
        </button>
        <button
          onClick={() => {
            this.props.onModeChange("search");
          }}
          style={{ color: "white" }}
          className="btn btn-sm"
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  }
}

export default Footerbtn;
