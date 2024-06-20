import { postJoinData } from '@/service/main/join'
import { defineStore } from 'pinia'

interface IJoinState {
  entireJoin: any[] // 整个成员列表
}
const useJointore = defineStore('joinData', {
  state: (): IJoinState => ({
    entireJoin: []
  }),
  actions: {
    async fetchJoinDataAction(data: any) {
      const JoinResult = await postJoinData(data)
      console.log(JoinResult)
    }
  }
})
export default useJointore
