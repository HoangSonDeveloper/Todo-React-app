import React from "react";

class Checkbox extends React.Component {
  labelStyle = (completed) => {
    return completed ? "text-decoration-line-through" : "";
  };
  render() {
    const { item, onChecked } = this.props;
    return (
      <div>
        <input
          className="form-check-input me-1"
          type="checkbox"
          id={item.id}
          onClick={() => onChecked(item)}
          defaultChecked = {item.completed}
        />
        <label
          className={this.labelStyle(item.completed)}
          style={{ cursor: "pointer" }}
          htmlFor={item.id}
        >
          {item.name}
        </label>
      </div>
    );
  }
}

export default Checkbox;
