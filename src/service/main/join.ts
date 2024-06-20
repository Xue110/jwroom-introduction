import hyRequest from '..'

export function postJoinData(data: any) {
  return hyRequest.post({
    url: '/join',
    data: data
  })
}
