import { addMessage, getMessage } from '@/service/main/message'
import { defineStore } from 'pinia'

interface ImessageState {
  entiremessage: any[] // 整个成员列表
}
const usemessageStore = defineStore('message', {
  state: (): ImessageState => ({
    entiremessage: []
  }),
  actions: {
    async fetchGetMessageAction() {
      const messageResult = await getMessage()
      console.log(messageResult)
      this.entiremessage = messageResult.data
    },
    async fetchPostMessageAction(data: any) {
      const messageResult = await addMessage(data)
      console.log(messageResult)
    }
  }
})
export default usemessageStore
