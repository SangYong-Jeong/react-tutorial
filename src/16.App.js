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

  const nextId = useRef(4); // nextId = { current: 4 } // 렌더링 여부 즉, 함수가 호출 될 때마다 4가 아니다. 처음렌더링 할 때 4로 인식하고 두번째 렌더링 부터 useRef()는 인수를 무시하고 기존에 메모리에 저장되어 있는 값을 읽어온다. 렌더링 여부와 무관한 변수를 하나 가질수 있게 된것이다. 이 값이 변한다고 렌더링 되지는 않는다.

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
    nextId.current -= 1;
  };

  const onToggle = (id) => {
    // 해당 id인 유저만 active 값 변경 그 외의 user는 그대로 배열에 들어가게 세팅
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
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

// *** 배열의 불변성을 유지하면서 배열을 업데이트 할 때에도 map 함수를 사용 할 수 있다.
// * 구현 내용 -> id 값을 비교해서 id가 다르다면 그대로 두고, 같다면 active 값을 반전시키도록 구현한다.
