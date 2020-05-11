import React, { Component } from 'react';

class MyName extends Component {
    render() {
        return (
            <div>
                안녕하세요 제 이름은 {this.props.name} 입니다.
            </div>
        );
    }
}

MyName.defaultProps = {
    name: '기본이름'
};

export default MyName;