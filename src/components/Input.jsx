import React, { Component } from "react";

class Input extends Component {
  valueTodo = React.createRef();
  valueSearch = React.createRef();

  displayInput = (mode,str) => {
    return mode===str?"form-control":"form-control d-none"
  };
  render() {
    const { onSubmit, mode } = this.props;
    return (
      <div>
        <input
          onKeyUp={(e) => onSubmit(this.valueTodo.current.value, e)}
          ref={this.valueTodo}
          className={this.displayInput(mode, "add")}
          type="text"
          placeholder="Add New"
        />
        <input
          onKeyUp={(e) => onSubmit(this.valueTodo.current.value, e)}
          ref={this.valueSearch}
          className={this.displayInput(mode, "search")}
          type="text"
          placeholder="Search"
          onChange={()=>this.props.onItemSearch(this.valueSearch.current.value)}
        />
      </div>
    );
  }
}

export default Input;
