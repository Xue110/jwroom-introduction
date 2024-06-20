import hyRequest from '..'

export function getRencentlyList() {
  return hyRequest.get({
    url: '/recently'
  })
}
