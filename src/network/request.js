import axios from 'axios'

export function request(config){
//创建axios的实例
const instance = axios.create({
	baseURL: 'http://httpbin.org',
	timeout: 5000
})

//axios拦截器
instance.interceptors.request.use((config) =>{
	console.log(config);
	return config
},(err) => {
	console.log(err)
});
instance.interceptors.response.use()

//发送网络请求
return instance(config)
}