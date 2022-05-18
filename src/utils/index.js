import { buildRequest } from './network'

export async function getAllUsers () {
  const request = buildRequest('/users', 'GET')
  const response = await fetch(request)
  const data = await response.json()
  return data
}
