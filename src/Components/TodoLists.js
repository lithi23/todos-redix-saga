import React from 'react'
import Todo from './Todo'

let TodoLists = (props) =>{  
  let {todos}=props
    return(
        <div>
        <h1>Todo List</h1>
        {todos &&         
            todos.map(todo=>{
            return <Todo todo={todo} key={todo._id} idx={todo._id}/>
        })}
        </div> 
    )

}

export default TodoLists