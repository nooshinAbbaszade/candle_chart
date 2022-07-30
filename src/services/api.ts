import axios from "axios";

type responseType = (string|number)[];

const API_PATH = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=200';

export const getChartData = () => {
    return axiosRequest('GET', API_PATH)
}
axios.interceptors.request.use(
    (config) => {
        config.timeout = 3000;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
export const axiosRequest = (reqType:string, url:string) =>{
    let reqData = {
        method: reqType,
        url
    };
    return axios({
        ...reqData,
    })
        .then((res) : responseType[] => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
};