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
  return {
    dispatch: (action: any) => null,
    getState: () => initialState as S
  }
}

// export type ReducersMapObject<S = any, A extends Action = Action> = {
//   [K in keyof S]: Reducer<S[K], A>;
// }
// export function combineReducers<S, A extends Action = Action>(reducers: ReducersMapObject<S, A>): Reducer<S, A> {
// }
