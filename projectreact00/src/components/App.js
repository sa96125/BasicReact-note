import React from 'react';
import youtube from '../apis/youtube';


const App = () => {

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
