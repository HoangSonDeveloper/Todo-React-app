import React, { Component } from "react";
import { filtered, filterQuery } from "../Utils/Filter";

import Input from "./Input";

class Header extends Component {
  render() {
    const { todo, onState, onSubmit, mode,query } = this.props;
    const filterSearch = filterQuery(todo,query);
    const filter = filtered(onState, filterSearch);
    return (
      <header className="mb-1 px-3">
        <div className="text-center mb-4">
          <h1 style={{ textTransform: "uppercase" }}>Things to do</h1>
          <small>{filter.length} items remain</small>
        </div>
        <Input onItemSearch={this.props.onItemSearch} mode={mode} onSubmit={onSubmit} todo={todo}/>
      </header>
    );
  }
}

export default Header;
