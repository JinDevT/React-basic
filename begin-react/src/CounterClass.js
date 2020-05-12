import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props); // 리액트 컴포넌트가 지니고 있던 생성자를 super를 통해서 미리 실행함.
        this.state = { // 그 다음에 우리가 할 작업을 해주는 것
            number: 0
        }
    }

    onIncrease = () => {
        console.log('+button click!');
        const { number } = this.state;
        // this.setState는 비동기
        this.setState({
           number: number + 1
        }, () => console.log('(onIncrease function) setState number: ', number))

        // setState로 인해 바뀐 number 값을 알고싶다. 
        // 근데 여기서 console.log를 하면 이전 값이 나온다. 왜?
        // console.log(`(onIncrease function) setState number: ${number}`);
    }

    onDecrease = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1
        });
    }

    render() {

        // setState로 인해 바뀐 number 값을 알고싶다.
        // 위에서는 이전 값이 나와 render 함수 내부에 찍어봤는데 잘 나오긴한다. 근데 왜 컨솔이 두번이나 출력되나?
        // 이유 : 처음에 렌더링 되는데 setState하면 리렌더링 되기 떄문이다.
        //console.log(`(render function) setState number: ${this.state.number}`);
        return (
            <>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.onIncrease}>+</button>
                <button onClick={this.onDecrease}>-</button>
               
            </>
        );
    }
};

export default CounterClass;