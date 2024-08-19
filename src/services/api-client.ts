import axios from "axios";

export default axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: 'b56767c03c3f49c3a98113910241808'
    }
})