import {
  getAmountListData,
  getCardData,
  getCylinderData,
  getLineData,
  getRingData,
  getRoseData
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[]
  cardList: any
  lineList: any
  cylinderList: any
  ringList: any
  roseList: any
}

const useAnaylsisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    cardList: '',
    lineList: '',
    cylinderList: '',
    ringList: '',
    roseList: ''
  }),
  actions: {
    async fetchAnalysisDataAction() {
      const amountResult = await getAmountListData()
      console.log(amountResult)
      this.amountList = amountResult.data.data
    },
    async fetchCardDataAction() {
      const cardResult = await getCardData()
      console.log(cardResult)
      this.cardList = cardResult.data.data
    },
    async fetchLineDataAction() {
      const lineResult = await getLineData()
      console.log(lineResult)
      this.lineList = lineResult.data.data
    },
    async fetchCylinderDataAction() {
      const cylinderResult = await getCylinderData()
      console.log(cylinderResult)
      this.cylinderList = cylinderResult.data.data
    },
    async fetchRingDataAction() {
      const ringResult = await getRingData()
      console.log(ringResult)
      this.ringList = ringResult.data.data
    },
    async fetchRoseDataAction() {
      const roseResult = await getRoseData()
      console.log(roseResult)
      this.roseList = roseResult.data.data
    }
  }
})

export default useAnaylsisStore
