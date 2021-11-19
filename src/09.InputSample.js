import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  console.log(inputs);
  const { name, nickname } = inputs; // 비구조화 할당(=구조분해할당)을 통해 갑 추출
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name과 value를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name의 키를 가진 값을 value로 설정 -> scope 원리에 따라 함수안에 있는 name 우선 적용
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;

// setter 함수를 쓰지 않고 state를 변경하면 react가  state가 변경된것을 인지하지 못한다.********
// 클래스 ver setter : 하나의 세터로 state 관리 내가 원하는 state 변경값을 react가 알아서 update 시켜준다.(shallow copy 개념) this.state.업데이트할것 만 변화시켜준다.
// 함수 ver setter : 하나의 세터는 하나의 값을 바꿔준다. (응용하면 하나의 세터로 한 객체를 변경해 객체 안의 여러 값들을 바꿀 수도 있다.)

// * 리액트에서는 객체를 업데이트 할 때 기존 객체를 직접 수정하면 안되고 새로운 객체를 만들어서, 새 객체에 변화를 주어야 된다.
// 리액트에서 렌더링이 일어나는 시점은 해당 함수 컴포넌트의 state가 바뀐 시점이다.
// 함수 컴포넌트의 렌더링이란 함수가 새로 호출됨을 의미한다.

// useCallback (해당 의존성 배열에 해당하는 상태값(일반적으로 함수 내에서 변하는 값은 state값)이 바뀌면 콜백함수자체를 반환)
// useMemo (해당 의존성 배열에 해당하는 상태값(일반적으로 함수 내에서 변하는 값은 state값)이 바뀌면 콜백함수안의 내용을 연산해 return 값을 준다.)
// React.memo (해당 자식 컴포넌트의 props가 바뀌지 않았다면 렌더링을 하지 않는다.) - shallow copy개념이 들어간다.

// ReactDOM.render(element, document.getElementById('root')) 호출 시 React는 해당 element 의 태그를본다. 태그가 대문자일 시 해당 컴포넌트를 호출하고 컴포넌트의 형태가 함수 또는 클래스인가에 따라서 render를 실행하고 react element를 반환해 root안에 넣고 해당 virtual dom이 실제 dom과 다른 부분을 찾아서 update 시켜준다.
