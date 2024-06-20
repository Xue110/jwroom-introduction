import hyRequest from '..'

export function getIntroduce() {
  return hyRequest.get({
    url: '/introduce'
  })
}
