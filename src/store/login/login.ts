import router from '@/router'
import { accountLoginRequest } from '@/service/login/login'
import { defineStore } from 'pinia'
import useMainStore from '../main/main'

const useLoginStore = defineStore('user', {
  state: () => ({
    id: '',
    username: '',
    token: localStorage.getItem('token') ?? ''
  }),
  actions: {
    async loginAccountAction(account: { username: string; password: string }) {
      try {
        const loginResult = await accountLoginRequest(account)
        if (loginResult) {
          this.token = loginResult.data.data.token
          localStorage.setItem('token', this.token)
          this.id = loginResult.data.data.id
          localStorage.setItem('id', this.id)

          const mainStore = useMainStore()
          mainStore.fetchEntireDataAction()
          // 页面跳转
          router.push('/message')
        } else {
          // 处理登录失败的情况，例如显示错误信息等
          console.log('登录失败，账号密码错误')
        }
      } catch (error) {
        // 处理请求失败的情况，例如显示网络错误信息等
        console.log(error)
      }
    },
    loadLocalCacheAction() {
      // const token = localStorage.getItem('token')
      const mainStore = useMainStore()
      mainStore.fetchEntireDataAction()
    }
  }
})
export default useLoginStore
