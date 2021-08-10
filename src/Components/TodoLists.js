import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getTodos} from './../redux-store/action'
import Todo from './Todo'

let TodoLists = () =>{
    let dispatch =useDispatch()
    const todos = useSelector((store)=>store.todos)
    useEffect(()=>{
        dispatch(getTodos())
    },[dispatch])

  
  
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