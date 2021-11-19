import React from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  console.log('user');
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
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  console.log('userlist');
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

export default React.memo(UserList);

// 예를 들어서, User 컴포넌트에 b 와 button 에 onClick 으로 설정해준 함수들은, 해당 함수들을 useCallback 으로 재사용한다고 해서 리렌더링을 막을 수 있는것은 아니므로, 굳이 그렇게 할 필요 없습니다.

// 왜냐하면 users 값이 변경 되어 props로 전달되는 users값이 변경되고 이로인해 UserList 리렌더링 하게되므로

// * 추가적으로, 렌더링 최적화 하지 않을 컴포넌트에 React.memo를 사용하는 것은, 불필요한 props 비교만 하는 것이기 때문에 실제로 렌더링을 방지할수있는 상황이 있는 경우에만 사용해야한다.

// * 추가적으로, React.memo에서 두 번째 파라미터에 propsAreEqual 이라는 함수를 사용하여 특정 값들만 비교를 하는 것도 가능하다. 하지만 이것을 잘못사용한다면 오히려 의도치 않은 버그들이 발생할 수 있다.

// * 특정 비교값이 false 인 경우 특정 비교값만 새로운 props로 전달 되기 때문인가?? -> 아니다 return 값이 false 인 경우 새로운 newProps 전체가 이동  return 값이 true인 경우 메모라이즈된 이전 Props가 props로 넘어간다.
