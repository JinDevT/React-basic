import React, { useState } from 'react';

function Counter() {
    // 현재 상태, 이 상태를 바꾸는 함수
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // update function
        setNumber(prevNumber => prevNumber + 1);
    };
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;