import hyRequest from '..'

export function getTeamMembers() {
  return hyRequest.get({
    url: '/teammember'
  })
}

export function getTeamMembersInfo(queryInfo) {
  const data = {
    direction: queryInfo.value1,
    time: queryInfo.value2
  }
  console.log(data)
  return hyRequest.post({
    url: '/limitMembers',
    data: data
  })
}
