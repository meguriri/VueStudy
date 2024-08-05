import axios from "axios"

const router = axios.create({
    baseURL: 'http://localhost:5002', // 目标服务器的URL
    timeout: 5000, // 请求超时时间
    // 下面可以配置更多的请求选项
  });


function getData(){
    router.get('/data')
    .then(res=>{
        console.log('res:',res.data.data)
        return res.data.data
    })
}

export default getData