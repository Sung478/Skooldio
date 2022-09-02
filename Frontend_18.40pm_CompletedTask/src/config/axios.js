import axios from 'axios'

const server = "https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json"

const axiosInstance = axios.create({
        // withCredentials: true,
        baseURL: server
    })

export default axiosInstance