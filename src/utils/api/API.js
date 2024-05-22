import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://data.fx.kg/api/v1/',
    headers: {
        'Authorization': 'Bearer ZWTwGsilJ51pghTY3Rh4Bb3WKCk022UL5dTi3Fl6e365c435'
    }
})

export {
    axiosInstance
}

