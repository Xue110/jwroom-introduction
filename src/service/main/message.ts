import hyRequest from '..'

export function getMessage() {
  return hyRequest.get({
    url: '/message'
  })
}

export function addMessage(data: any) {
  return hyRequest.post({
    url: '/message',
    data: data
  })
}
