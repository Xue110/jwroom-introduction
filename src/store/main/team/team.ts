import { getTeamMembers, getTeamMembersInfo } from '@/service/main/main'
import { defineStore } from 'pinia'

interface ITeamMembersState {
  entireMembers: any[] // 整个成员列表
}
const useTeamMembersStore = defineStore('teamMembers', {
  state: (): ITeamMembersState => ({
    entireMembers: []
  }),
  actions: {
    async fetchMembersDataAction() {
      const MembersResult = await getTeamMembers()
      console.log(MembersResult)
      this.entireMembers = MembersResult.data
    },
    async fetchLimitMembersAction(queryInfo) {
      const MembersResult = await getTeamMembersInfo(queryInfo)
      console.log(MembersResult)
      this.entireMembers = MembersResult.data
    }
  }
})
export default useTeamMembersStore
