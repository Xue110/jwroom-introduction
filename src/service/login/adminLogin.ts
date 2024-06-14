import hyRequest from '..'

export function accountLoginRequest(account: { username: string; password: string }) {
  return hyRequest.post({
    url: '/admin/login',
    data: account
  })
}
