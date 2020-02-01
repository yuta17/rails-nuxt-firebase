export default function({ $axios }) {
  $axios.onRequest((config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common.Authorization = 'Bearer ' + token
      console.log(config.headers.common.Authorization)
    }
  })
}
