import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  const handleClick = () => {
    props.clearCompleted();
  };

  return (
    <div className="todo-list">
      {props.todos.map((item) => (
        <Todo key={item.id} toggleItem={props.toggleItem} item={item} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Todo
      </button>
    </div>
  );
};

export default TodoList;
