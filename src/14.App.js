import React, { useRef, useState } from 'react';
import UserList from './UserList.js';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ]);

  const nextId = useRef(4); // nextId = { current: 4 }

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...
    const user = {
      id: nextId.current,
      username, // === username: username
      email, // === email: email
    };
    setUsers(users.concat(user)); // 기존 배열훼손 x -> 새로운 배열 return
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만든다.
    // = user.id가 id인 것을 제거한다는 뜻
    setUsers(users.filter((user) => user.id !== id));
  };

  // 태그를 작성 할 때 이름 없이 작성을 하게 되면 Fragment가 만들어지는데, Fragment는 브라우저상에서 따로 별도의 엘리먼트로 나타나지 않는다.
  // JSX에서 null, false, undefined를 렌더링하게 된다면 아무것도 나타나지 않게된다.
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;

// useRef Hook은 DOM을 선택하는 용도 외에도, 다른 용도가 한가지 더 있다. 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하는것이다.
// useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링 되지 않는다.

/* 
이 변수의 용도
1. setTimeout, setInterval 을 통해서 만들어진 id
2. 외부 라이브러리를 사용하여 생성된 인스턴스
3. scroll 위치
*/

// 이번에 하는건 배열에 새 항목 추가시 새 항목에서 사용 할 고유 id를 관리하는 용도

// 배열이든 객체이든 변화를 줄 때에는 불변성을 지켜주어야 한다. ****왜?***
