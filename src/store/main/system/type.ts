export interface IUser {
  id: number
  name: string
  gender: number
  carId: String
  beginTime: String
  endTime: String
  status: String
}

export interface ISystemState {
  usersList: any[]
  usersTotalCount: number
}
