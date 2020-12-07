export interface IUser {
  email?: string
  password?: string
  googleToken?: string
}

export interface ISaveUserResponse {
  id: number
  email: string
  terminalId: string
}