import { UserActions } from './user/actions'
import { initialState as userState, reduce as userReducer, State as UserState} from './user/reducer'
import { combineReducers, createStore } from './redux'

export type RootAction =
  UserActions[keyof UserActions]

export type RootState = {
  user: UserState,
}

const reduce = combineReducers<RootState, RootAction>({
  user: userReducer,
})

export const getStore = () => createStore(reduce, {
  user: userState,
})
