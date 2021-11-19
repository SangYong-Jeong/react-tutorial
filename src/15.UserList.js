import React from 'react';

function User({ user, onRemove, onToggle }) {
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

// 대문자로 시작하는 사용자 정의 컴포넌트는 해당 컴포넌트를 부른 컴포넌트와 같은 파일안에 존재해야한다. import로 부르거나

// 배열에 있는 항목을 제거하는것 역시 추가할때와 마찬가지로 불변성을 지켜가면서 업데이트를 해주어야 한다.

// ** 불변성을 지키면서 특정 원소를 배열에서 제거하기 위해서는 filter 배열 내장함수를 사용하는 것이 가장 편하다.
