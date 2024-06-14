import { getMessageData } from '@/service/message/message'
import { defineStore } from 'pinia'

interface IMessageState {
  entireMessageInfos: any[]
}
const useMessageStore = defineStore('message', {
  state: (): IMessageState => ({
    entireMessageInfos: []
  }),
  actions: {
    async fetchMessageDataAction() {
      const MessageInfosResult = await getMessageData()
      console.log(MessageInfosResult)
      this.entireMessageInfos = MessageInfosResult.data.data
    }
  }
})
export default useMessageStore
