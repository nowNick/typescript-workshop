import { APIError } from '@ws06/model'

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

type UserId = string

export interface User {
  id: UserId
  email: string
  firstName: string
  lastName: string
}

export type UserActions = {
  CREATE_USER_REQUEST: {
    type: typeof CREATE_USER_REQUEST, payload: UserId
  },
  CREATE_USER_SUCCESS: {
    type: typeof CREATE_USER_SUCCESS, payload: User
  },
  CREATE_USER_FAILURE: {
    type: typeof CREATE_USER_FAILURE, payload: APIError
  }
}

export interface State {
  loading: boolean
  user?: User
  error?: APIError
}
