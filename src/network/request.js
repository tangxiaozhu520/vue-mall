import axios from 'axios'
export default function request(config) {
    const instance =axios.create({
        // baseURL:"http://123.207.32.32:8000/api/x6",
        baseURL: "http://123.207.32.32:8000/api/h8",
        timeout:5000
    });
    instance.interceptors.request.use(config=>{
        return config;
    },err=>{
        return err;
    })
    instance.interceptors.response.use(res=>{
        return res.data;
    },err=>{
        console.log(err)
    })
    return instance(config)
}