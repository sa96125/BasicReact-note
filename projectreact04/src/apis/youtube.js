// axioS의 메서드를 이용해서 자체적으로 사용방식을 재정의한다.
// - 상당히 편리함, 읽기도 쉽고.

import axios from 'axios';

const KEY = 'AIzaSyCC8MJK0xVndgO2lKop7WvUn3ioczLarZA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        type: 'video',
        key: KEY,
        part: "snippet",
        maxResults: 50
    }
})