import axios from '@/utils/myaxios'

export const userLogin = (data)=>{
    return axios({
        method:'post',
        url:'/login',
        data
    })
}

export const getUserInfo = (id)=>{
    return axios({
        // headers:{
        //     Authorization:localStorage.getItem('hmtt1_token')
        // },
        url:`/user/${id}`
    })
}