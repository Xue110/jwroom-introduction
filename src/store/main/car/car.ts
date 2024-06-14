import { defineStore } from 'pinia'
import type { ICarState } from './type'
import {
  deleteCarById,
  editCarDdata,
  getCarsLimitListData,
  getCarsListData,
  newCarData
} from '@/service/main/car/car'

const useCarStore = defineStore('car', {
  state: (): ICarState => ({
    carsList: [],
    carsTotalCount: 0
  }),
  actions: {
    async postCarsListAction(queryInfo: any) {
      console.log('这里是普通分页查询')
      const CarsListResult = await getCarsListData(queryInfo)
      console.log(CarsListResult)
      if (CarsListResult.data.data.total) {
        this.carsTotalCount = CarsListResult.data.data.total
      } else {
        this.carsTotalCount = CarsListResult.data.data.records.length
      }
      this.carsList = CarsListResult.data.data.records
    },
    async deleteCarByIdAction(id: number) {
      //1.删除数据
      const deleteResult = await deleteCarById(id)
      console.log(deleteResult)

      // 2.重新请求新的数据
      this.postCarsListAction({ offset: 1, size: 10 })
    },
    async getCarsListDataAction(queryInfo: any) {
      console.log('这里是条件分页查询')
      const CarsListResult = await getCarsLimitListData(queryInfo)
      console.log(CarsListResult)
      if (CarsListResult.data.data.total) {
        this.carsTotalCount = CarsListResult.data.data.total
      } else {
        this.carsTotalCount = CarsListResult.data.data.records.length
      }
      this.carsList = CarsListResult.data.data.records
    },
    //新建数据
    async newCarDataAction(data: any) {
      const newResult = await newCarData(data)
      console.log(newResult)

      this.postCarsListAction({ offset: 1, size: 10 })
    },
    //修改数据
    async editCarDdataAction(data: any) {
      const editResult = await editCarDdata(data)
      console.log(editResult)

      this.postCarsListAction({ offset: 1, size: 10 })
    }
  }
})
export default useCarStore
