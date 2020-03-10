import React from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import About from './components/Pages/About';
//import { v4 as uuidv4 } from 'uuid';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
state={
  todos:[]
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos:res.data}))
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
  // const newTodo={
  //   id:uuidv4(),
  //   title,
  //   completed:false
  // }
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed:false
  }).then(res=>this.setState({todos:[...this.state.todos, res.data]}));
  //this.setState({todos:[...this.state.todos, res.data]})
}

  render(){
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
  );
  }
}

export default App;
