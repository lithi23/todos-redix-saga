
export const GET_TODOS ='GET_TODOS'
export const ADD_TODOS = 'ADD_TODOS'
export const UPDATE_TODOS = 'UPDATE_TODOS'
const SET_ADD_TODOS='SET_ADD_TODOS'
const SET_UPDATE_TODOS='SET_UPDATE_TODOS'
const SET_TODOS='SET_TODOS'
export const getTodos = () =>({
    type:GET_TODOS
})

export const setTodos = (todos) =>({
    type:SET_TODOS,
    todos
})

export const addTodos = (todos) =>({
    type:ADD_TODOS,
    todos     
})

export const updateTodos = (todos) =>({
    type:UPDATE_TODOS,
    todos     
})

export const setUpdateTodos = (todos) =>({
    type:SET_UPDATE_TODOS,
    todos     
})

export const setAddTodos = (todos) =>({
    type:SET_ADD_TODOS,
    todos     
})

let initialState={
    todos:[]
}

 const todoReducer = (state=initialState,action) =>{
    
    switch(action.type){
        case SET_TODOS:
            return {...state,todos:action.todos}
        case SET_ADD_TODOS:
            return {...state,todos:state.todos.unshift(action.todos)}
        case SET_UPDATE_TODOS:
            return{...state,todos:state.todos.map(todo=> {if(todo._id==action.todos._id) return todo=action.todos})}
            default:
                return state

    }
}

export default todoReducer