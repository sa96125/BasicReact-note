import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID LR_O9qN2fGYF_l545702pSyZC40615D9RZoTuUOLe54'
    }
})