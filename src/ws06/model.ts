export type UserId = string

export interface User {
  id: UserId
  email: string
  firstName: string
  lastName: string
}

export interface Success {

}

export interface APIError {
  code: number
  message: string
}
