export interface Action<T = any> {
  type: T;
}

export type Reducer<S = any, A extends Action = Action> = (state: S | undefined, action: A) => S;

export interface Dispatch<D = Action> {
  <A extends D>(action: A): A
}

export interface Store<S = any, A extends Action = Action> {
  dispatch: Dispatch<A>

  getState(): S
}

export function createStore<S, A extends Action>(reducer: Reducer<S, A>, initialState: S | undefined): Store<S, A> {
  let state  = initialState

  return {
    getState: (): S => state as S,
    dispatch: <B extends A>(action: B) => {
      state = reducer(state, action)
      return action
    }
  }
}

// export type ReducersMapObject<S = any, A extends Action = Action> = {
//   [K in keyof S]: Reducer<S[K], A>;
// }
// export function combineReducers<S, A extends Action = Action>(reducers: ReducersMapObject<S, A>): Reducer<S, A> {
// }


