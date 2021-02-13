import axios from 'axios';

const KEY = 'AIzaSyCaDF3egm4h5cu6yE7sCead-UQ93n4bIKE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        channelId: 'UCvO2bSSliGZxGOG2SM9yxuA',
        maxResults: 50
    }
})