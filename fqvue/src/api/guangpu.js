import axios from 'axios'

axios.get('http://hsi.v4.idcfengye.com/image')
// 3.2成功时回调函数
  .then((data) => {
    console.log(data)
  })
// 3.3失败时回调函数
  .catch((err) => {
    console.log(err)
  })

axios.get('http://157.122.54.189:9095/posts', {
  params: { id: 4 }})
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
