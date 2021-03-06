import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getTodos,addTodos} from './../redux-store/action'
import TodoLists from './TodoLists'
import './../App.css'



let AddTodo = () =>{

let [inputs,setInputs] = useState({todo:"",label:""})
let dispatch = useDispatch()

const todos = useSelector((store)=>store.todos)

useEffect(()=>{
    dispatch(getTodos())
},[dispatch])


let handleOnChange = (e) =>{
  e.persist()  
  setInputs(inputs =>({...inputs,[e.target.name]:e.target.value}))
  console.log("inputs : "+inputs.todo + " = "+ inputs.label)
}


let handleSubmit = (e) =>{
  e.preventDefault()
  console.log("inputs " + JSON.stringify(inputs))
  dispatch(addTodos(inputs))
}
    return(
        <div className="container">
            <form className="form-inline mt-5"  onSubmit={handleSubmit}>

  <div className="form-group mx-sm-3 mb-2" style={{paddingLeft:"300px"}}>
    <label className="sr-only">Enter todo here...</label>
    <input type="text" className="form-control" id="inputTodo" placeholder="Enter todo here..." onChange={handleOnChange} name="todo" value={inputs.todo}/>
  </div>
  <div className="form-group mx-sm-3 mb-2">
    <label  className="sr-only">Bucket</label>
    <input type="text" className="form-control" id="inputLabel" placeholder="Enter a label to todo" onChange={handleOnChange} name="label" value ={inputs.label}/>
  </div>
  <button type="submit" className="btn btn-primary mb-2">Save</button>
</form>
<div>
<TodoLists todos={todos}/> 
</div>
        </div>

    )
}

export default AddTodo