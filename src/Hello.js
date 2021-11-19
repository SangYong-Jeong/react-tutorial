import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b> /* 단축 평가 논리 계산법 */}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

// 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 props를 쓰는 컴포넌트에 defaultProps라는 값을 설정하면 된다. 형식은 객체 형태에 key-value를 넣어주는 식으로

// JSX에서 null, false, undefined를 렌더링하게 된다면 아무것도 나타나지 않게 된다.
export default Hello;
