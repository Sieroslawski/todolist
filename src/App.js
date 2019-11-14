import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddForm'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
    return todo.id !== id //If the todo id's aren't equal return true
  })
  this.setState({
    todos: todos
  })
}

addTodo = (todo) => {
  todo.id = Math.random();
  let todos = [...this.state.todos, todo];
  this.setState({
    todos: todos //new todos equals old todos
  })
}

  render() {
    return (
    <div className="todo-app container">
      <h1 className ="center green-text">Todo's</h1>
      <Todos red-text todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo} />
    </div>
  );
}
}

export default App;
