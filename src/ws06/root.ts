import { UserActions } from './user/actions'
import { reduce as userReducer, State as UserState } from './user/reducer'
import { combineReducers, createStore } from './redux'
import { initialUserState } from '@ws06/user/reducer'

export type RootAction =
  UserActions[keyof UserActions]

export type RootState = {
  user: UserState,
}

const reduce = combineReducers<RootState, RootAction, keyof UserActions>({
  user: userReducer,
})

export const getStore = () => createStore(
  reduce,
  {
    user: initialUserState
  }
)
