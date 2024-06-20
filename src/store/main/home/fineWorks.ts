import { getFineWroks } from '@/service/main/fineWorks'
import { defineStore } from 'pinia'

interface IFineWorksState {
  entireFineWorks: any[] // 整个成员列表
}
const useFineWorksStore = defineStore('fineFineWorks', {
  state: (): IFineWorksState => ({
    entireFineWorks: []
  }),
  actions: {
    async fetchFineWorksAction() {
      const FineWorksResult = await getFineWroks()
      console.log(FineWorksResult)
      this.entireFineWorks = FineWorksResult.data
    }
  }
})
export default useFineWorksStore
