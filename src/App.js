import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./components/Todo.css";

const todos = [
  {
    name: "React",
    id: 123,
    completed: false,
  },
  {
    name: "Redux",
    id: 124,
    completed: false,
  },
  {
    name: "Python",
    id: 1235,
    completed: false,
  },
  {
    name: "HTML",
    id: 1246,
    completed: false,
  },
  {
    name: "CSS",
    id: 1237,
    completed: false,
  },
  {
    name: "Ruby",
    id: 1248,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  toggleItem = (id) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    this.setState({
      todos: newTodos,
    });
  };

  addItem = (title) => {
    const newItem = {
      name: title,
      id: this.state.todos.length,
      purchased: false,
    };

    this.setState({
      todos: [...this.state.todos, newItem],
    });
  };

  clearCompleted = () => {
    const newTodos = this.state.todos.filter((item) => {
      return item.completed === false;
    });
    this.setState({
      todos: newTodos,
    });
  };

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          clearCompleted={this.clearCompleted}
          toggleItem={this.toggleItem}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
