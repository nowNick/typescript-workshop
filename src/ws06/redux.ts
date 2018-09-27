export interface Action<T = any> {
  type: T;
}

export type Reducer<S, A extends Action> = (state: S, action: A) => S;

export interface Dispatch<A> {
  (action: A): A
}

export interface Store<S, A extends Action> {
  dispatch: Dispatch<A>

  getState(): S
}

export function createStore<S, A extends Action>(reducer: Reducer<S, A>, initialState: S): Store<S, A> {
  let state  = initialState

  return {
    getState: (): S => state as S,
    dispatch: <B extends A>(action: B) => {
      state = reducer(state, action)
      return action
    }
  }
}

export type ReducersMapObject<S, A extends Action> = {
  [K in keyof S]: Reducer<S[K], A>;
}

export function combineReducers<S, A extends Action>(reducers: ReducersMapObject<S, A>): Reducer<S, A> {
  return (state: S, action: A) => {
    type Key = keyof S
    const keys = Object.keys(state) as Key[]

    return keys.reduce((state: S, key: Key) => Object.assign<{}, S, Partial<S>>(
      {},
      state,
      {[key]: reducers[key](state[key], action)} as {[K in keyof S]: S[K] }
    ), state)
  }
}

