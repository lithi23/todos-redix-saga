import { call,put } from "@redux-saga/core/effects";
import {getTodosApi,addTodosApi,updateTodosApi} from '../Api'
import {setTodos,setUpdateTodos,setAddTodos} from './action'
import Axios from 'axios'

export function* handleGetTodos(){
    try{
        const response = yield call(getTodosApi)
        let {data}=response
        console.log("Inside GET " + JSON.stringify(data))
        yield put(setTodos(data))
    }
    catch(e){
    console.log(e)
    }
}

export function* handleAddTodos(action){
try{
    console.log("Inside ADD " + JSON.stringify(action.todos))
  const response = yield call(Axios.post,"http://localhost:8001/addTodo",action.todos)
  console.log("add response : " + response)
  let {data} = response
  console.log("addtodos : " +JSON.stringify(response.data))
  yield put(setAddTodos(data))
}
catch(e){
console.log("addtodos e " + e)
}
}

export function* handleUpdateTodos(action){
    try{
    const response = yield call(updateTodosApi(action.todos))
    let {data} = response
    yield put(setUpdateTodos(data))
    }
    catch(e){
        console.log(e)
    }
}