import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.giphy.com',
  params: {
    api_key: 'uxFPgBtv0ibSZH8BISwdDAi0diw0xMEX',
    limit: 48,
    rating: 'pg-13'
  }
});
