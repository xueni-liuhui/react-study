import axios from 'axios';

const fetchData = () => {
    return axios.get("http://192.168.50.126:8071/river/report/login-count")
}

export default fetchData