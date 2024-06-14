import hyRequest from '..'

export function accountLoginRequest(account: { username: string; password: string }) {
  return hyRequest.post({
    url: '/user/login',
    data: account
  })
}
