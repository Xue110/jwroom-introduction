import hyRequest from '..'

export function getNewMembers() {
  return hyRequest.get({
    url: '/members'
  })
}
