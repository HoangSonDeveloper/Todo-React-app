import React, { Component } from "react";

class Filters extends Component {
  styleActive = {
    backgroundColor: "white",
    color: "black",
  };

  btnClasses = (state) => {
    
    return this.props.onState === state ? this.styleActive : { color: "white" };
  };
  render() {
    return (
      <div>
        <ul className="list-group list-group-horizontal">
          {this.props.state.map((state) => (
            <li
      
              key={state.id}
              onClick={() => this.props.onItemSelected(state.status)}
              className="list-group-item p-1 px-2 bg-secondary border border-0"
            >
              <button
                style={this.btnClasses(state.status)}
                className="btn btn-sm"
              >
                {state.name}
              </button>
            </li>
          ))}

          {/* <li onClick={()=>this.props.onItemSelected(this.props.todo)} className="list-group-item bg-secondary"><button style={{color: "white"}} className="btn btn-sm">Active</button></li>
                    <li onClick={()=>this.props.onItemSelected(this.props.todo)} className="list-group-item bg-secondary"><button style={{color: "white"}} className="btn btn-sm">Completed</button></li> */}
        </ul>
      </div>
    );
  }
}

export default Filters;
