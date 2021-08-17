
export const GET_TODOS ='GET_TODOS'
export const ADD_TODOS = 'ADD_TODOS'
export const UPDATE_TODOS = 'UPDATE_TODOS'
const SET_ADD_TODOS='SET_ADD_TODOS'
const SET_UPDATE_TODOS='SET_UPDATE_TODOS'
const SET_TODOS='SET_TODOS'
export const DELETE_TODOS  = 'DELETE_TODOS'
const SET_DELETE_TODOS = 'SET_DELETE_TODOS'
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

export const deleteTodos = (id) =>({
    type:DELETE_TODOS,
    id
})
export const setDeleteTodos = (id) =>({
    type:SET_DELETE_TODOS,
    id
})


let initialState={
    todos:[]
}

 const todoReducer = (state=initialState,action) =>{
    
    switch(action.type){
        case SET_TODOS:
            return {...state,todos:action.todos}
        case SET_ADD_TODOS:
            return {todos:state.todos.unshift(action.todos)}
        case SET_UPDATE_TODOS:
            return{...state,todos:state.todos.map(todo=> (todo._id===action.todos._id) ? action.todos : todo)}
        case SET_DELETE_TODOS:
            console.log("set del : " +action.id)
            return {todos:state.todos.filter(todo=>todo._id!==action.id)}
            default:
                return state

    }
}

export default todoReducer



//todos:state.todos.push(action.todos)