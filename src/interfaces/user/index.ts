export interface IUser {
  email: string
  password: string
}

export interface ISaveUserResponse {
  id: number
  email: string
  terminalId: string
}