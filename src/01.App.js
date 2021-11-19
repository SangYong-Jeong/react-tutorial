import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;

// Wrapper 컴포넌트가 self-closing tag가 아닌 일반 HTML 태그처럼 <Wrapper>..</Wrapper>처럼 작성되고 안에 <Hello /> 컴포넌트가 들어있는 경우 <Wrapper> 컴포넌트의 props로 <Hello / > 컴포넌트가 전달된다. key값은 children, value 값은 컴포넌트(여러개일 경우 배열로 들어간다.)

// 컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 true로 설정한 것으로 간주합니다.
