export interface Action<T> {
  type: T
}

export type Reducer<S, A extends Action<T>, T> = (state: S, action: A) => S

export interface Dispatch<A extends Action<T>, T> {
  (action: A): A
}

export interface Store<S, A extends Action<T>, T> {
  dispatch: Dispatch<A, T>

  getState (): S
}

export function createStore<S, A extends Action<T>, T> (reducer: Reducer<S, A, T>, initialState: S): Store<S, A, T> {
  let state = initialState

  return {
    dispatch: (action: A) => {
      state = reducer(state, action)
      return action
    },
    getState: () => state
  }
}

export type ReducersMapObject<S, A extends Action<T>, T> = {
  [K in keyof S]: Reducer<S[K], A, T>
}

export function combineReducers<S, A extends Action<T>, T>(reducers: ReducersMapObject<S, A, T>): Reducer<S, A, T> {
  return (state: S, action: A) => {
    type Key = keyof S
    const keys = Object.keys(state) as Key[]

    return state
  }
}
