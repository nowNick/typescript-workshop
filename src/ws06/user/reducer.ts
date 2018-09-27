import { APIError, CREATE_USER_FAILURE, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, State } from './actions'
import { RootAction, RootState } from '../root'
import { User } from '../model'

export interface State {
  loading?: boolean
  user?: User
  error?: APIError
}

const initialState: State = {
  loading: true
}

export function reduce (state: RootState | undefined = initialState, action: RootAction): State {
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
