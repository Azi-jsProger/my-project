import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://thronesapi.com/'
})

export {
    axiosInstance
}