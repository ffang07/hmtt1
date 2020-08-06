import axios from 'axios'

axios.defaults.baseURL='http://localhost:3000'

axios.interceptors.request.use(
    function(config){
        let token=localStorage.getItem('hmtt1_token')
        if(token){config.headers.Authorization=token}
        console.log('打印config头token：',config)
        return config
    },
    function(error){return Promise.reject(error)}
)


export default axios