import { getWroks, postResearch } from '@/service/main/works'
import { defineStore } from 'pinia'

interface IWorksState {
  entireWorks: any[] // 整个成员列表
}
const useWorksStore = defineStore('works', {
  state: (): IWorksState => ({
    entireWorks: []
  }),
  actions: {
    async fetchWorksAction() {
      const WorksResult = await getWroks()
      console.log(WorksResult)
      this.entireWorks = WorksResult.data
    },
    async fetchResearchWorksAction(data) {
      const WorksResult = await postResearch(data)
      console.log(WorksResult)
      this.entireWorks = WorksResult.data
    },
    async fetchWorksByCategoryAction(tab) {
      const WorksResult = await postResearch(tab)
      console.log(WorksResult)
      this.entireWorks = WorksResult.data
    }
  }
})
export default useWorksStore
