import React from 'react';

function Hello({ color, name }) {
    return (
      <div style={{ color }}>{name}님 반가워요!</div>
    );
}

Hello.defaultProps = {
    name: "이름없음"
}

export default Hello; 

