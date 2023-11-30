/* eslint-disable arrow-spacing */

import axios from "axios";




axios.get("http://157.122.54.189:9095/posts", {
  params: { id: 4 } })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });



// //底下的代码也是创建axios实例
// let requests = axios.create({
//   //基础路径
//   baseURL: "/local",//对应vue.config文件里面的proxy代理
//   //请求不能超过5S
//   timeout: 5000,
// });

// //请求拦截器（可以在请求发出去之前，做一些事情）
// requests.interceptors.request.use((config) => {
// config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
//   return config;
// }, error => {
//   Promise.reject(error)
// }))

// //响应拦截器（在数据返回之后，做一些事情）
// requests.interceptors.response.use(
//   (res) => {
//     //响应成功
//     return res.data;
//   },
//   (err) => {
//     //响应失败
//     alert("服务器响应数据失败");
//   }
// );
// export default requests;
