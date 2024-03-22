// import

import { useRef, useState } from "react";


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
      <h2>ToDo리스트</h2>
      <h3>{dateString}</h3>
      <h4>남은 할 일 {count}개</h4>
      <form onSubmit={(e) => createTodo(e)}>
        <input name="content"/>
        <button type="submit">등록</button>
      </form>
      
      
      <ul>
        {todos.map((todo) => 
        <li key={todo.id}>
          <input type="checkbox" checked={todo.isCheck} onChange={() => checkTodo(todo.id)}></input>
          <span>{todo.content}</span>
          {editingId == todo.id ? (
            <form onSubmit={(e) => saveTodo(todo.id, e)}>
              <input name="content"></input>
              <button type="submit">저장</button>
            </form>
          ) : (<></>)}
          <button onClick={() => modifyTodo(todo.id)}>수정</button>
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </li>
        )}
       

      </ul>
      
    </div>
  );
}

export default App;
