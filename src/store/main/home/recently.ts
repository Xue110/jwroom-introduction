import { getRencentlyList } from '@/service/main/recently'
import { defineStore } from 'pinia'

interface IRecentlyState {
  entireRecently: any[] // 整个成员列表
}
const useRecentlyStore = defineStore('recently', {
  state: (): IRecentlyState => ({
    entireRecently: []
  }),
  actions: {
    async fetchRecentlyAction() {
      const RecentlyResult = await getRencentlyList()
      console.log(RecentlyResult)
      this.entireRecently = RecentlyResult.data
    }
  }
})
export default useRecentlyStore
