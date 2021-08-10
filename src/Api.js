import axios from 'axios'

const API_BASE_URL = "http://localhost:8001"

const api = axios.create ({
    baseURL: API_BASE_URL
})

export function getTodosApi(){
return api.get('/getTodos')
}

export function addTodosApi(todos) {
    return api.post('/addTodo',todos)
}

export function updateTodosApi(todos) {
    return api.put('/updateTodo',todos)
}