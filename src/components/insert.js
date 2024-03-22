
function Insert({createTodo}) {

    return(
    <>
      <form onSubmit={(e) => createTodo(e)}>
        <input name="content"/>
        <button type="submit">등록</button>
      </form>
    </>
    );
}

export default Insert;