import { State, UserActions } from './user/actions'
import { reduce} from './user/reducer'
import { createStore } from './redux'

export type RootAction =
  UserActions[keyof UserActions]

export type RootState =
  State

export const getStore = () => createStore<State, RootAction>(reduce, {})
