import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;

// Array.prototype.concat 함수 = 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어준다.
