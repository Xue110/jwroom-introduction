import router from '@/router'
import { accountLoginRequest } from '@/service/login/adminLogin'
import { defineStore } from 'pinia'
import useMainStore from '../main/main'

const adminUseLoginStore = defineStore('admin', {
  state: () => ({
    id: '',
    username: '',
    token: localStorage.getItem('token') ?? ''
  }),
  actions: {
    async adminLoginAccountAction(account: { username: string; password: string }) {
      try {
        const loginResult = await accountLoginRequest(account)
        if (loginResult) {
          this.id = loginResult.data.data.id
          this.token = loginResult.data.data.token
          this.username = loginResult.data.data.username

          // 进行本地缓存
          localStorage.setItem('token', this.token)
          localStorage.setItem('id', this.id)
          const mainStore = useMainStore()
          mainStore.fetchEntireDataAction()
          router.push('/main')
        } else {
          // 处理登录失败的情况，例如显示错误信息等
          console.log('登录失败，账号密码错误')
        }
      } catch (error) {
        // 处理请求失败的情况，例如显示网络错误信息等
        console.log(error)
      }
    }
  }
})
export default adminUseLoginStore
