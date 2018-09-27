import { RootAction } from '../root'
import { APIError } from '@ws06/model'
import { CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, User } from '@ws06/user/actions'

export interface State {
  loading?: boolean
  user?: User
  error?: APIError
}

export const initialState: State = {
  loading: true
}

export function reduce (state: State = initialState, action: RootAction): State {
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
