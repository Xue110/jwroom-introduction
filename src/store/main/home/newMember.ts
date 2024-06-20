import { getNewMembers } from '@/service/main/newMember'
import { defineStore } from 'pinia'

interface INewMemberState {
  entireNewMember: any[] // 整个成员列表
}
const useNewMemberStore = defineStore('newMember', {
  state: (): INewMemberState => ({
    entireNewMember: []
  }),
  actions: {
    async fetchNewMemberAction() {
      const NewMemberResult = await getNewMembers()
      console.log(NewMemberResult)
      this.entireNewMember = NewMemberResult.data
    }
  }
})
export default useNewMemberStore
