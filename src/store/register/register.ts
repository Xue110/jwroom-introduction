import { accountRegRequest } from '@/service/register/register'
import { defineStore } from 'pinia'

const useRegStore = defineStore('register', {
  state: () => ({
    id: '',
    username: '',
    token: localStorage.getItem('token') ?? ''
  }),
  actions: {
    async regAccountAction(account: {
      username: string
      password: string
      rePassword: string
      email: string
    }) {
      try {
        const regResult = await accountRegRequest(account)
        if (regResult.data.success) {
          alert('注册成功')
        } else {
          // 处理注册失败的情况，例如显示错误信息等
          console.log('注册失败，账号密码错误')
        }
        alert('注册成功，可以进行登陆了')
      } catch (error) {
        // 处理请求失败的情况，例如显示网络错误信息等
        console.log(error)
      }
    }
  }
})
export default useRegStore
