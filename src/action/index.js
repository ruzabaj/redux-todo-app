//for generating random number for id 
// id: Math.ceil(Math.random()*100)

export const addTodo=(newTodo)=>{
    return{
        type: 'ADD_TODO',
        payload : newTodo
    }
}

export const deleteTodo=(id)=>{
    return{
        type: 'DELETE_TODO',
        payload: id
    }
}