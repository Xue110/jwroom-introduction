export interface ICar {
  id: number
  name: string
  category: number
  image: string
  price: number
  time: string
  status: string
  addTime: string
}

export interface ICarState {
  carsList: any[]
  carsTotalCount: number
}
