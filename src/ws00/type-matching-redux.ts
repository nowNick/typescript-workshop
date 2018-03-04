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
    type: typeof CREATE_USER_REQUEST, payload: any
  },
  CREATE_USER_SUCCESS: {
    type: typeof CREATE_USER_SUCCESS, payload: any
  },
  CREATE_USER_FAILURE: {
    type: typeof CREATE_USER_FAILURE, payload: any
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
    case CREATE_USER_SUCCESS:
    case CREATE_USER_FAILURE:
  }
}
