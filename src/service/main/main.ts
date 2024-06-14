import hyRequest from '..'

export function getEntireCars() {
  return hyRequest.get({
    url: '/car/list'
  })
}
