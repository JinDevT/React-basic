import React from 'react';

function Hello({ color, name, isSpecial}) {
    return (
        <div style={{
            color
        }}>
            {isSpecial && <b>*</b>}
            {name}야 반가워
        </div>
    );
}

// 기본값 설정
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello; 

