import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0); // useState의 기본값을 설정하지 않을 시 첫 번째, 두 번째 배열 요소 전부 다 undefined반환

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
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

// 의문 ? 특정 값이 바뀌어서 매번 함수가 호출되고 렌더링 되었을 대 useState가 돌아가는데 그럼 매번 state 값은 초기화되는 것이 아닌가?
// 해답 : 첫 번째 렌더링 시 state가 없기에 state 변수를 선언 두 번째 렌더링 부터는 state에 있는 해당 변수를 읽는다. 기본값으로 넣은 인자는 무시된다.

// React의 Hooks는 첫 번째 렌더링 때 일어났던 호출순서에 따라 Hook을 기억한다.(React가 Hook이 호출되는 순서에 의존한다는 것입니다. )

// state의 값을 변경하는 setter에 값을 줘서 해당 state의 값을 변경하는 방법이 있고, setter의 인자에 함수를 주고 그 함수의 매개변수에 이전 state의 값이 들어가면 그것을 이용해서 처리하는 로직을 짤 수도 있다.
