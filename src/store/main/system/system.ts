import {
  deleteUserById,
  editUserDdata,
  getUsersListDataWithConditions,
  newUserData,
  postUsersListData
} from '@/service/main/system/system'
import { defineStore } from 'pinia'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0
  }),
  actions: {
    async postUsersListAction(queryInfo: any) {
      console.log('这里是普通分页查询')
      const usersListResult = await postUsersListData(queryInfo)
      console.log(usersListResult)
      if (usersListResult.data.data.total) {
        this.usersTotalCount = usersListResult.data.data.total
      } else {
        this.usersTotalCount = usersListResult.data.data.records.length
      }
      this.usersList = usersListResult.data.data.records
    },
    async deleteUserByIdAction(id: number) {
      //1.删除数据
      const deleteResult = await deleteUserById(id)
      console.log(deleteResult)

      // 2.重新请求新的数据
      this.postUsersListAction({ offset: 1, size: 10 })
    },
    async getUsersListDataAction(queryInfo: any) {
      console.log('这里是条件分页查询')
      const usersListResult = await getUsersListDataWithConditions(queryInfo)
      console.log(usersListResult)
      if (usersListResult.data.data.total) {
        this.usersTotalCount = usersListResult.data.data.total
      } else {
        this.usersTotalCount = usersListResult.data.data.records.length
      }
      this.usersList = usersListResult.data.data.records
    },
    //新建数据
    async newUserDataAction(data: any) {
      const newResult = await newUserData(data)
      console.log(newResult)

      this.postUsersListAction({ offset: 1, size: 10 })
    },
    //修改数据
    async editUserDdataAction(data: any) {
      const editResult = await editUserDdata(data)
      console.log(editResult)

      this.postUsersListAction({ offset: 1, size: 10 })
    }
  }
})
export default useSystemStore
