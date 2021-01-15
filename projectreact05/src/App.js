import React from 'react';
import Accordion from './Accordion';

const data = [
    {
        title: '왜 개발자가 되고 싶어요?',
        content: '데이터 춘추전국시대, 데이터를 다루는자 흥하리라:)'
    },
    {
        title: '왜 리액트를 공부하니?',
        content: '왜냐면 리액트는 가장 유명한 자바스크립트 프레임워크니까:)'
    },
    {
        title: '프론트엔드를 직무로 선택한 이유는?',
        content: '평소 만드는 것을 좋아하는데 웹페이지에서 작은 기능들을 하나둘씩 만들어가는게 재미있어서'
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <Accordion data={data} />
        </div>
    );
}
