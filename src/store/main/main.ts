import { getEntireCars } from '@/service/main/main'
import { defineStore } from 'pinia'

interface IMainState {
  entireCars: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireCars: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const carsResult = await getEntireCars()
      this.entireCars = carsResult.data.data
      console.log(this.entireCars)
    }
  }
})

export default useMainStore
