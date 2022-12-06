import React from "react";
import { useState } from "react";
import "../sass/todo.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action/index";

const Todo = () => {
  const todoList = useSelector((state) => {
    return {
      reducer: state.Reducer,
    };
  });
const data=todoList.reducer.todos;
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  // if(!todos || !todos.length){
  //   return(
  //     <ul>
  //       {todos.map(todo=><li>{todo.label}</li>)}
  //     </ul>
  //   )
  // }
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo-outer">
      <div className="todo">
        <div className="input-todo">
          <input type="text" onChange={handleChange} value={newTodo} />
          <button type="submit" className="btn-add" onClick={handleAdd}>
            Add
          </button>
        </div>
        {data.map((element, index) => (
          console.log(element)
        /* // <div className="todo-list" key={index}> */
        /* //   <p className="list">{element.todos}</p>
          //   <button type="submit" className="btn-delete" onClick={handleDelete(element.id)}>
          //     Delete
          //   </button>
          // </div> */
        ))} 
      </div>
    </div>
  );
};

export default Todo;
