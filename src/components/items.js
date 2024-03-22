import ListItem from "./ListItem";

function Items({editingId, todos, checkTodo, deleteTodo, modifyTodo, saveTodo}) {

    return(
    <>
      <ul>
        {todos.map((todo) => 
        <ListItem editingId={editingId} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} modifyTodo={modifyTodo} saveTodo={saveTodo}></ListItem>)}
      </ul>
    </>
    );
}

export default Items;