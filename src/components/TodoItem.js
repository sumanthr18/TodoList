import React, { Component } from 'react';


export class TodoItem extends Component {

    itemStyle=()=>{

        return{

            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    


    render() {

        const {id,title}=this.props.todo;

        return (
            <div>
                <p style={this.itemStyle()}>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle ={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
};


export default TodoItem;
