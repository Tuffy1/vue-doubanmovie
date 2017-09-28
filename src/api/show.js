import axios from 'axios'

export function getonshow () {
  const url = '/api/in_theaters'
  const data = {
    apikey: '',
    city: '深圳',
    start: 0,
    count: 100
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function gettoshow () {
  const url = '/api/coming_soon'
  const data = {
    apikey: '',
    city: '深圳',
    start: 0,
    count: 100
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getdetail (id) {
  const url = '/api/subject/' + id
  const data = {
    apikey: '',
    city: '深圳'
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
