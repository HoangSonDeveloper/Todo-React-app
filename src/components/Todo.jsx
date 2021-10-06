import React from "react";
import { filtered,filterQuery } from "../Utils/Filter";
import Checkbox from "./Checkbox";

const Todo = (props) => {
  const { todo, onChecked, onState,query } = props;
  const filterSearch = filterQuery(todo,query);
  const filter = filtered(onState, filterSearch);
  return (
    <div>
      <ul className="list-group list-group-flush px-3">
        {filter.map((item) => (
          <li key={item.id} className="list-group-item">
            <div className="checkbox">
              <Checkbox item={item} onChecked={onChecked} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
