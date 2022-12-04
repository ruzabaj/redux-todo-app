//for generating random number for id 
// id: Math.ceil(Math.random()*100)

export const addTodo=(newTodo)=>{
    return{
        type: 'ADD_TODO',
        payload :{
            data: newTodo,
            id: Math.ceil(Math.random()*100)
        }
    }
}

export const deleteTodo=(id)=>{
    return{
        type: 'DELETE_TODO',
        payload: id
    }
}
 export const removeTodo=(todo)=>{
    return{
        type:'REMOVE_TODO',
        payload: todo
    }
 }