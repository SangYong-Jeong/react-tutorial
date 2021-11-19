import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser';

//countActiveUsers 함수에서 콘솔에 메시지를 출력하도록 한 이유는, 이 함수가 호출될때마다 우리가 알수있게 하기 위함입니다.
function countActieUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers((users) => users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActieUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;

// * useMemo는 특정 결과값을 재사용 할 때 사용한다.

// * useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다.

// * 함수들은 컴포넌트가 리렌더링 될 대마다 새로 만들어진다. 함수를 선언하는 것 자체는 메모리도, CPU도 리소스를 많이 차지하지는 않지만 최적화 측면에서 중요하다. 구체적으로 한 번 만든 함수를 필요할때만 새로 만들고 재사용하는것이 중요하다.

// * 왜냐하면 나중에 컴포넌트에서 props가 바뀌지 않았으면 Virtual DOM에 새로 렌더링 하려는 것 조차 하지 않고 컴포넌트의 결과물을 재사용 하는 최적화 작업을 하기위해서이다.

// * 주의할 점은, 함수 안에서 사용하는 상태 혹은 props가 있다면 꼭, deps 배열안에 포함시켜야 된다는 것이다. 만약에 deps 배열 안에 함수에서 사용하는 값을 넣지 않게 된다면, 함수 내에서 해당 값들을 참조할 때 가장 최신 값을 참조할 것이라고 보장 할 수 없기 때문인다. props로 받아온 함수가 있다면 이 또한 deps에 넣어주어야 한다.
