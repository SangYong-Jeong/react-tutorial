import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1); // 함수형 업데이트
  };
  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

// * 상태를 관리하게 될 때 useState를 사용하는것 말고도 다른 방법이 있다. 바로 useReducer를 사용하는거다. 이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.

// * 즉, 상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용할 수도 있다.

// * useState와 useReducer를 비교해 학습하면 좋을듯

// * reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다.

/* 
ex) function reducer (state, action) {
  새로운 상태를 만드는 로직
  const nextState = ...
  return nextState
}
*/
