import {takeEvery} from 'redux-saga/effects'
import { handleGetTodos,handleAddTodos,handleUpdateTodos } from './../handler'
import {GET_TODOS,ADD_TODOS,UPDATE_TODOS} from './../action'


export function* watcherGetSaga(){
    yield takeEvery(GET_TODOS,handleGetTodos)
    
}

export function* watcherAddSaga(){
    yield takeEvery(ADD_TODOS,handleAddTodos)
    
}

export function* watcherUpdateSaga(){
    yield takeEvery(UPDATE_TODOS,handleUpdateTodos)
}