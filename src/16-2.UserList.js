import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    // 비동기
    console.log('user 값이 설정됨 등록 or 업데이트');
    console.log(user);
    return () => {
      console.log('user가 바뀌기 전.. or 언마운트 될시');
      console.log(user);
    };
  }, [user]);
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

// ** deps(의존성 배열)에 특정 값을 넣으면 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출이 된다. dpes 안에 특정 값이 있다면 언마운트시에도 호출, 바뀌기 직전에도 호출

// useEffect 안에서 사용하는 상태나, props가 있다면 useEffect의 deps에 넣어주어야 한다. 그렇지않은면 useEffect에 등록한 함수가 실행 될 때 최신 props/ 상태를 가르키지 않게 된다.
