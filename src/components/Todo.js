import React from 'react'
import { useState } from 'react';
import '../sass/todo.scss';
import { useDispatch, useSelector } from 'react-redux';
import {addTodo, deleteTodo, removeTodo} from "../action/index";

const Todo=()=>{
  const todos= useSelector(state=>state.todos);

  const dispatch =useDispatch();
  const [newTodo, setNewTodo]= useState('');
  
  const handleChange= event=>{
    setNewTodo(event.target.value)
  }
  
  // if(!todos || !todos.length){
  //   return(
  //     <ul>
  //       {todos.map(todo=><li>{todo.label}</li>)}
  //     </ul>
  //   )
  // }
  const handleAdd=(e)=>{
    e.preventDefault();
    dispatch(addTodo(newTodo))
  }
  return(
    <div className="todo-outer">
      <div className="todo">
    <div className="input-todo">
    <input type="text" onChange={handleChange} value={newTodo}/>
     <button type="submit" className="btn-add" onClick={(handleAdd)}>Add</button>
     </div>
     </div>
     </div>
  )
};

export default Todo