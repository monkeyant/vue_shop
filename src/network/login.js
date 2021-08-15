import { request } from './request'

export function login(username, password) {
  const config = {
    url: '/login',
    method: 'post',
    params: {
      username,
      password
    }
  }
  return request(config)
}
