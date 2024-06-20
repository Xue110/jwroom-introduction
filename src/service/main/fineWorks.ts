import hyRequest from '..'

export function getFineWroks() {
  return hyRequest.get({
    url: '/fineWorks'
  })
}
