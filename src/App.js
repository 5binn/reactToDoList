// import

import { useRef, useState } from "react";
import Nav from "./components/Nav";
import Insert from "./components/Insert";
import Items from "./components/Items";


function App() {
  //로직 공간

  const lastId = useRef(3);

  const[todos, setTodos] = useState([
    {id: 0, content: "TODO1", isCheck: false},
    {id: 1, content: "TODO2", isCheck: false},
    {id: 2, content: "TODO3", isCheck: true}
  ]);
  
  const createTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {id: lastId.current, content: e.target.content.value, isCheck: false}]);
    lastId.current++;
    e.target.content.value = '';
  }

  const deleteTodo = (id) => {
    const updateTodos = todos.filter(todo => todo.id != id);
    setTodos(updateTodos);
  }

  const checkTodo = (id) => {
    const updateTodos = todos.map(todo => todo.id == id ? {...todo, isCheck: !todo.isCheck }: todo);
    setTodos(updateTodos);
    console.log(updateTodos);
  }

  const [editingId, setEditingId] = useState(null);

  const modifyTodo = (id) => {
    setEditingId(id);
  }

  const saveTodo = (id, e) => {
    e.preventDefault();
    const updateTodos = todos.map(todo => todo.id == id ? {...todo, content: e.target.content.value }: todo);
    setTodos(updateTodos);
    setEditingId(null);
  }

  const today = new Date();
  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  
  
  const count = todos.filter(todo => !todo.isCheck).length;

  return (
    //뷰 영역

    <div className="App">

      <Nav headerName="Todo리스트" dateString={dateString} count={count}/>

      <Insert createTodo={createTodo}></Insert>
      
      <Items editingId={editingId} todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo} saveTodo={saveTodo}></Items>

      
    </div>
  );
}

export default App;
