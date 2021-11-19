import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log(user);
  });
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

// * deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출이된다.

// * 리액트 컴포넌트는 기본적으로 부모컴포넌트가 리렌더링 되면 자식 컴포넌트 또한 리렌더링이 된다. 바뀐 내용이 없다 할지라도...

// * 물론 실제 DOM에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만 해당된다. 하지만 Virtual DOM에는 모든걸 다 렌더링하고 있다는거다. 그러기에 컴포넌트의 최적화 과정이 필요하다!!
