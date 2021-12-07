import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Sy1LvKW1HsirTE6Y0yjIae-zhRFG4IGsNmAdGsPh3zU',
    }
})