import React, { Component } from 'react';

class LifeCycle extends Component {
    state = {
        number: 0
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // 화면에 나가기 직전에 호출되는 API
    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        // 외부 라이브러리 연동
        // 비동기 작업 처리
        // 이벤트 등록
        // 첫 렌더링을 다 마친 후 실행
        setTimeout(() => {
            this.onIncrease();
        }, 1000);
        console.log('componentDidMount')
    }

    // 컴포넌트를 최적화하는 작업에서 매우 유용하다.
    // 쓸대없이 낭비되고 있는 CPU 처리량을 줄여주기 위해서 가상돔에 리렌더링 하는것도,
    // 불필요할경우엔 방지하기 위해 작성
    // 기본적으로 true를 반환
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate' , nextState);
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    // shouldComponentUpdate에서 true를 반환했을때만 호출.
    // fasle를 반환하면 호출되지 않음.
    // 애니메이션 효과를 초기화 하거나, 이벤트 리스너를 없애는 작업을 한다.
    // 다음에는 render가 호출됨.
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate' , nextState);
    }

    // render를 호출하고 다음에 발생
    // this.props와 this.state가 바뀌어있음.
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    // 컴포넌트가 더이상 필요하지 않게 되면 호출됨
    // 이벤트를 제거
    // setTimeout을 걸은것이 있다면 clearTimeout을 통하여 제거
    // 외부 라이브러리 인스턴스 제거
    componentWillUnmount() {
        console.log('componentWillUnmount');
        if(this.state.number === 5) {
            clearTimeout(this.state.number);
        }
    }
    onIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
        //this.componentDidMount();
    }

    onDecrease = () => {
        const { number } = this.state;
        this.setState({
            number: number - 1
        });
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.onIncrease}>+</button>
                <button onClick={this.onDecrease}>-</button>
            </div>
        );
    }

};

export default LifeCycle;