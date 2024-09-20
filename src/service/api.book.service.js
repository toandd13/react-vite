import axios from "axios";

const fetchAllBookAPI = () => {
    const URL_BACKEND = "api/v1/book";
    return axios.get(URL_BACKEND)
}

export {
    fetchAllBookAPI
}