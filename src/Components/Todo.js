import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import 'antd/dist/antd.css';
import { Card,Button } from 'react-bootstrap';
import { updateTodos} from './../redux-store/action'

let Todo =(props) => {
  let [editMode,setEditMode] = useState(false)
  const [inputs, setInputs] = useState({"id":props.idx})

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

    return(
        <div className="container">
            <Card style={{ width: '30rem',textAlign:'left', height:'15rem' }}>
            <Card.Header>
            {
              editMode ? <input type="text" className="form-control" id="label" name="label" value={inputs.label} onChange={handleOnChange}/>
              :
              <label style={{}}>{props.todo.label}</label>
            }
            </Card.Header>
            <Card.Body>
              <Card.Text>               
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