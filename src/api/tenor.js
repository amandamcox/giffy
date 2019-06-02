import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.tenor.com',
  params: {
    api_key: 'BIRHLBYSRGQD',
    limit: 48,
    locale: 'en_US',
    contentfilter: 'medium'
  }
});
