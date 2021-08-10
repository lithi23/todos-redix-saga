import './App.css';
import TodoLists from './Components/TodoLists'
import AddTodo from './Components/AddTodos'
import Bucket from './Components/Bucket/bucket'
function App() {
  return (
    <div className="App">
<h1>Todos</h1>
<AddTodo />
<TodoLists /> 

    </div>
  );
}

export default App;
