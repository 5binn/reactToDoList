
function Nav({headerName, dateString, count}) {

    return(
    <>
    <h2>{headerName}</h2>
      <h3>{dateString}</h3>
      <h4>남은 할 일 {count}개</h4>
    </>
    );
}

export default Nav;