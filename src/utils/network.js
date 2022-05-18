const url = 'https://jsonplaceholder.typicode.com'

export function buildRequest(uri, method) {
  return new Request(`${url}${uri}`, {
    method: method,
    redirect: 'follow'
  })
}