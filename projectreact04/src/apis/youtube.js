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