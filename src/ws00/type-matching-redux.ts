export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

type UserId = string

interface User {
  id: UserId
  email: string
  firstName: string
  lastName: string
}

interface Success {

}

interface APIError {
  code: number
  message: string
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
  loading?: boolean
  user?: User
  error?: APIError
}

export type RootAction =
  UserActions[keyof UserActions]

export function reduce (action: RootAction, state: State): State {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload

      }
    case CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
