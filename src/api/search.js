import axios from 'axios'

export default function search (query) {
  const url = '/api/search'
  const data = {
    apikey: '',
    q: query
  }
  return axios.get(url, {
    params: data
  }).then((res) => Promise.resolve(res.data))
}
