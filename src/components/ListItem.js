
function ListItem({editingId, todo, checkTodo, modifyTodo, deleteTodo, saveTodo}) {

    return(
    <>
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
    </>
    );
}

export default ListItem;