import React from 'react'
import { useState } from 'react';
import '../sass/todo.scss';
import { useDispatch, useSelector } from 'react-redux';

const Todos =()=>{
  const todos= useSelector(state=>state.todos);
  if(!todos || !todos.length){
    return(
      <ul>
        {todos.map(todo=><li>{todo.label}</li>)}
      </ul>
    )
  }
};

const TodoInput=()=>{
  const dispatch =useDispatch();
  const [newTodo, setNewTodo]= useState('');
  const handleChange= event=>{
    setNewTodo(event.target.value)
  }
  const handleClick =()=>dispatch({
    type: 'ADD_TODO',
    payload: {
      label:newTodo,
      id: Math.ceil(Math.random()*100)
    }
  })
  return(
    <div className="todo-outer">
      <div className="todo">
    <div className="input-todo">
    <input type="text" onChange={handleChange} value={newTodo}/>
     <button type="submit" className="btn-add" onClick={handleClick}>Add</button>
     </div>
     </div>
     </div>
  )
};

const Todo = () => {
  return (
        <div>
          <Todos/>
          <TodoInput/>
        </div>
  )
}

export default Todo