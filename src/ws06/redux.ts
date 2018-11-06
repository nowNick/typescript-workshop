export interface Action<T = any> {
  type: T
}

export type Reducer = (state: any, action: any) => any

export interface Dispatch {
  (action: any): any
}

export interface Store<S> {
  dispatch: Dispatch

  getState(): S
}

export function createStore<S>(reducer: Reducer, initialState: S | undefined): Store<S> {
  let freshState = initialState
  return {
    dispatch: (action: any) => freshState = reducer(initialState, action),
    getState: () => freshState as S
  }
}

export type ReducersMapObject<S> = {
  [K in keyof S]: Reducer
}

// export type ReducersMapObject<S, A extends Action> = {
//   [K in keyof S]: Reducer<S[K], A>
// }

export function combineReducers<S, A extends Action>(reducers: ReducersMapObject<S>): Reducer {
  return (state: S, action: A) => {
    type Key = keyof S
    const keys = Object.keys(state) as Key[]
    return keys.reduce((oldState, key) => ({[key]: reducers[key](oldState[key], action)} as any as S), state)
  }
}

