import React, {Component} from 'react';
import TodoItem from './components/todoItem'
import './App.css';
import todoData from './todoData'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      Todos:  todoData
    }
    
  }

  stateChangeHandler = (id) => {
    let updatedTodo = this.state.Todos.map(t => {
      if (t.id === id){
        if (t.completed === true){
          t.completed = false;
        } else {
          t.completed = true;
        }
      }
      return t
    });

    return this.setState({Todos: updatedTodo})
    
  }

  
  render() { 
    console.log("handler", this.state.Todos)
    let todos = this.state.Todos.map(todo => <TodoItem key={todo.id} info={todo} onStateChange={this.stateChangeHandler}/>)

    return ( 
      <div className="todo-list">
        {todos}
      </div>
    );
  }
}
 


export default App;