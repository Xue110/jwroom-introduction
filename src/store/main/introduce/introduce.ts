import { getIntroduce } from '@/service/main/introduce'
import { defineStore } from 'pinia'

interface IintroduceState {
  entireintroduce: any[] // 整个成员列表
}
const useIntroduceStore = defineStore('introduce', {
  state: (): IintroduceState => ({
    entireintroduce: []
  }),
  actions: {
    async fetchIntroduceAction() {
      const introduceResult = await getIntroduce()
      console.log(introduceResult)
      this.entireintroduce = introduceResult.data
    }
  }
})
export default useIntroduceStore
