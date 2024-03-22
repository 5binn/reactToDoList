import styled from 'styled-components';

const nav = styled.div`
    span {
      margin-top: 4px;
      color: #868e96;
      font-size: 21px;
    }
  `;

function Nav({headerName, today, count}) {

  


  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleString('ko-KR', { weekday: 'long' });

    return(
    <nav>
      <h2>{headerName}</h2>
      <h3>{dateString}<span> {dayName}</span></h3>
      <h4>남은 할 일 {count}개</h4>
    </nav>
    );
}

export default Nav;