import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-bd764.firebaseio.com'
});

export default instance;