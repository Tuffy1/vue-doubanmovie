import axios from 'axios'

export function toprank (count) {
  const url = '/api/top250'
  const data = {
    apikey: '',
    count: count
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function usrank () {
  const url = '/api/us_box'
  const data = {
    apikey: ''
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function weeklyrank () {
  const url = '/api/weekly'
  const data = {
    apikey: ''
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function newrank () {
  const url = 'api/new_movies'
  const data = {
    apikey: ''
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
