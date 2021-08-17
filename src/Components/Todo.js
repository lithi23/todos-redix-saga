import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import 'antd/dist/antd.css';
import { Card,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { updateTodos,deleteTodos} from './../redux-store/action'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';




let Todo =(props) => {
  let [editMode,setEditMode] = useState(false)
  const [inputs, setInputs] = useState({})


  let handleOnChange = (e) =>{
      e.persist()  
      setInputs(inputs =>({...inputs,[e.target.name]:e.target.value}))
      console.log("inputs : "+inputs.todo + " = "+ inputs.label)
    }
   let dispatch = useDispatch()

   let handleSaveTodos = (e) =>{
     e.preventDefault()
     setEditMode(false)
     setInputs(inputs =>({...inputs,["id"]:props.idx}))
     console.log("update inputs : " + JSON.stringify(inputs))
     dispatch(updateTodos(inputs))
   }

   let handleCompleted = (id,completed) => {
     let complete = !completed
     console.log(" old completed : " + completed + " - new completed : " + complete)
     dispatch(updateTodos({"id":id,"completed":complete}))
   }

   let handleDelete = (id) =>{
     console.log("onclick del : " + id)
     dispatch(deleteTodos(id))
   }

    return(
        <div className="container">
            <Card style={{ width: '30rem',textAlign:'left', height:'10rem' }}>
            <Card.Header style={{padding: "2px 2px 2px 20px"}}>
            {
              editMode ? <input type="text" className="form-control" id="label" name="label" value={inputs.label} onChange={handleOnChange}/>
              :
              <label style={{}}>{props.todo.label}</label>
            }
            <Tooltip title="Delete">
            <IconButton aria-label="delete" style={{  marginRight: '10px' }} onClick={()=>{handleDelete(props.todo._id)}}>
                <DeleteIcon />
             </IconButton>
            </Tooltip>
            </Card.Header>
            <Card.Body>
              <Card.Text> 
              <input type="checkbox" defaultChecked={props.todo.completed} onChange={(e)=>{handleCompleted(props.todo._id,props.todo.completed)}} style={{marginRight:"5px"}}/>              
                {
              editMode ? <input type="text" className="form-control" id="inputTodo" name="todo" value= {inputs.todo} onChange={handleOnChange}/>
              :
              <label style={{}}> {props.todo.todo}</label>
            }
              </Card.Text>
              {
               editMode ? 
               <Button variant="primary" onClick={handleSaveTodos}>Save</Button>
               :
               <Button variant="primary" onClick={()=>setEditMode(true)}>Edit</Button>  
              }
            </Card.Body>
            </Card>
            
        </div>
    )
}

export default Todo

/*
<label style={{}}>{props.todo.label}</label>
            <div  className="icons-list"><EditOutlined /></div>
*/