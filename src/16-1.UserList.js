import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      {/* 아래의 경우 onClick 이벤트 핸들러 안에 함수를 넣음으로써 첫번째 인자가 이벤트 객체가 아니게 되었다. */}
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;

// useEffect를 사용 할때에는 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps)를 넣는다. deps 배열을 비우게 되면, 컴포넌트가 처음 나타날때에만 useEffect에 등록한 함수가 호출된다. (왜냐하면 의존하는게 없으므로 의존하는 값이 변경되어야 호출되는 useEffect에 등록한 함수가 호출되지 않는 로직)

// useEffect에서는 함수를 반환 할 수 있다. 이를 cleanup 함수라 부른다. cleanup 함수는 useEffect에 대한 뒷정리를 해준다. deps가 비어있는 경우 컴포넌트가 사라질 때 cleanup 함수가 호출된다. ** unmount와 deps의 관계에 대해 알아볼 필요 존재

// 주로 마운트 시에 하는 작업들
/* 
1. props로 받은 값을 컴포넌트의 로컬 상태로 설정
2. 외부 API 요청 (REST API 등)
3. 라이브러리 사용
4. setInterval을 통한 반복작업 혹은 setTimeout을 통한 작업 예약
*/

// 주로 언마운트 시에 하는 작업들
/* 
1. setInterval, setTimeout을 사용하여 등록한 작업들 clear하기 (clearInterval, clearTimeout)
2. 라이브러리 인스턴스 제거
*/

// ** deps(의존성 배열)에 특정 값을 넣으면 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출이 된다. dpes 안에 특정 값이 있다면 언마운트시에도 호출, 바뀌기 직전에도 호출
