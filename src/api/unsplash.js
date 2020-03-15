import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f-TxoeLfRDimvES_dP36TA36cYwXlxGz_epKQt0S0eQ'  
    }
});