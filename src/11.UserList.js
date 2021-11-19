import React from 'react';

// 재사용되는 코드를 일일히 넣는게 별로 좋지 않다. 컴포넌트를 재사용 할 수 있도록 새로 만드는게 좋다.
// 리액트에서 동적인 배열을 렌더링해야 할 때는 map 함수를 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 반환해주면 된다.
// 리액트에서 배열을 렌더링 할 때에는 key라는 props를 설정해야 한다. key 값은 각 원소들마다 가지고 있는 고유값으로 설정을해야한다. -> 만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index를 key로 사용하면 된다. key를 설정하는 이유는, 각 고유 원소에 key가 있어야만 배열이 업데이트 될 대 효율적으로 렌더링 될수 있기 때문이다.

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
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
  ];
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;

// JSX {} 안에서 배열은 for문과 같다고 생각하자 안에 있는 요소들이 차례대로 튀어나와 렌더링 된다.
// 키는 주변 배열의 context에서만 의미가 있다. 배열 안에서 key를 지정해야 한다. 즉 배열의 컴포넌트 엘리먼트가 key를 가져야한다.
// key는 배열 안에서 형제 사이에서 고유해야 하고 전체 범위에서 고유할 필요는 없다. 두 개의 다른 배열을 만들 때 동일한 key를 사용할 수 있다.
// 컴포넌트의 props로 key를 전달하지 않는다.
// 가독성을 위해 변수로 추출해야 할지 아니면 인라인으로 넣을지는 개발자가 직접 판단해야 한다.
// 12번 userRef로 컴포넌트 안의 변수 만들기부터 복습시작
