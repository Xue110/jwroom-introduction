import hyRequest from '..'

export function getWroks() {
  return hyRequest.get({
    url: '/works'
  })
}

export function postResearch(value: any) {
  const data = {
    value: value
  }
  return hyRequest.post({
    url: '/researchworks',
    data: data
  })
}

export function worksByCategory(value: any) {
  const data = {
    value: value
  }
  return hyRequest.post({
    url: '/worksByCategory',
    data: data
  })
}
