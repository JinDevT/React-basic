import React from 'react';
import Hello from './Hello'; // hello 컴포넌트를 불러오겠다.
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fonotSize: 24,
    padding: '1rem'
  };
  return (
    <div>
      <Hello />
      <div style={style}>{name}</div> 
      <div className="gray-box"></div>
    </div>
  );
}

export default App;
// 태그는 꼭 닫혀야 한다
// 두개이상의 태그는 하나의 태그로 감싸줘야한다. <> 프래그먼트? 로 감싸면된다.
// 자바스크립트 값을 jsx내부에서 보여줄때는 {}로 감싸서 해야한다.
// jsx내부에서 스타일을 사용하고 싶을 때는 객체형태로 사용하여야 한다.
// class가 아니고 classNamed이다.