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
