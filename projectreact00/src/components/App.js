// 전체 계획에 대한 수도코드

// 1. 일단은 유튜브 리스트를 불러운돠.
// - 리스트의 스타일은 렝킹, 설명, 제목등으로만 일단 구성
// - 네비리스트는 메뉴, 게시판, 로그인, 메일
// - 세부적으로는 각 리스트가 실시간으로 반양되는 것을 목표로 하지만, 그전에 저녁 12시에 한번씩 업뎃하면 될듯.

// 2. 각 리스트가 가지는 디테일 컴포넌트는 아코디언컴포넌트처럼 작성한다.
// - 안쪽에 데이터 비주얼을 나타내고 각 스택은 뭐가 있는지 설명.

// 3. 컨셉은 모던한 오픈소스 웹사이트처럼 구성.

import React from 'react';
import youtube from '../apis/youtube';

const App = () => {

  // 채널 아이디 받고, statisticAPI로 그정보로 구독자수, 썸네일, 등등 내 자료랑 비교한다.
  const updateList = async () => {
    const res = await youtube.get('/subscriptions');
    console.log(res);
  }
  updateList();



  return (
    <div>
      hello world
    </div>
  );
}

export default App;
