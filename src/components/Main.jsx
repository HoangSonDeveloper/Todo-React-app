import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Todo from "./Todo";

class Main extends Component {
  state = {
    todo: [
      { id: 1, name: "Learn JS", completed: false },
      { id: 2, name: "Learn React", completed: false },
    ],
    todoState: [
      { id: 0, name: "All", status: "" },
      { id: 1, name: "Active", status: false },
      { id: 2, name: "Completed", status: true },
    ],
    onState: "",
    mode: "add",
    query:""
  };

  handleChecked = (item) => {
    const todo = [...this.state.todo];
    const index = todo.indexOf(item);
    todo[index].completed = !todo[index].completed;
    this.setState({ todo });
  };

  handleSubmit = (value, e) => {
    if (e.code === "Enter") {
      if (value !== "") {
        const todo = [...this.state.todo];
        const item = {};
        item.id = Date.now();
        item.name = value;
        item.completed = false;
        todo.push(item);
        e.target.value = "";
        this.setState({ todo });
      }
    }
  };

  handleStateSelected = (state) => {
    this.setState({ onState: state });
  };

  handleModeChange=(str)=>{
    this.setState({mode: str})
  }

  handleSeach = (query)=>{
    this.setState({query})
  }
  render() {
    const { todo, onState, todoState,mode,query } = this.state;

    return (
      <div>
        <Header query={query} onItemSearch={this.handleSeach} onState={onState} todo={todo} onSubmit={this.handleSubmit} mode={mode}/>
        <Todo query={query} onState={onState} onChecked={this.handleChecked} todo={todo} />
        <Footer
          onItemSelected={this.handleStateSelected}
          todo={todo}
          state={todoState}
          onState={onState}
          mode={mode}
          onModeChange={this.handleModeChange}
        />
      </div>
    );
  }
}

export default Main;
