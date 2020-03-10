import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends React.Component {
state={
  todos:[{
      id:uuidv4(),
      title:'going out with friend',
      completed:false
  },
  {
    id:uuidv4(),
    title:'meeting with boss',
    completed:false
  },
  {
    id:uuidv4(),
    title:'dinner with family',
    completed:false
  }
]
}

markComplete=(id)=>{
  this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
  })});
}

//delete Todo
delTodo=(id)=>{
  this.setState({todos: [...this.state.todos.filter(todo =>todo.id!==id)]});
}

//add Todo
addTodo=(title)=>{
  const newTodo={
    id:uuidv4(),
    title,
    completed:false
  }
  this.setState({todos:[...this.state.todos,newTodo]});
}

  render(){
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
  );
  }
}

export default App;
