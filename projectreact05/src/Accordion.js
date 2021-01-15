// 리액트 훅의 useState함수를 사용한다.
import React, { useState } from 'react';

const Accodion = ({ data }) => {
    // 기본적으로 useState는 배열을 반환하고 하나의 state자료만 컨트롤 할 수있다.
    // class 컴포넌트에서는 state를 이용하면 여러개를 동시에 사용할 수 있는 것과 비교된다.
    const [presentData, setData] = useState(null);

    // 클릭이 되면 state값을 셋팅한다.
    const onTitleClick = index => {
        setData(index);
    }

    const renderedData = data.map((item, index) => {
        // 각 아이템의 인덱스와 현재의 클릭된 아이템의 인덱스를 비교하고 css를 추가하여 화면에 나타낸다.
        const active = presentData === index ? 'active' : ''

        return (
            /* React fragment는 아무속성이 없고 fure한 태그이다. */
            <React.Fragment key={item.title} >
                <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    })

    return (
        <div className="ui styled accordion">
            {renderedData}
        </div>
    );
}

export default Accodion;