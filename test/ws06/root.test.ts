/// <reference types="jest" />
import { getStore } from '@ws06/root'
import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from '@ws06/user/actions'
import { initialState as userState } from '@ws06/user/reducer'

const context = describe

describe('redux', () => {
  it('flows', () => {
    const store = getStore()

    expect(store.getState()).toEqual({user: userState})

    store.dispatch({
      type: CREATE_USER_REQUEST,
      payload: 'user-id'
    })

    expect(store.getState()).toEqual({
      user: {
        loading: true
      }
    })

    const user = {
      id: 'user-id',
      email: 'user@example.com',
      firstName: 'john',
      lastName: 'john',
    }

    store.dispatch({
      type: CREATE_USER_SUCCESS,
      payload: user
    })

    expect(store.getState()).toEqual({
      user: {
        loading: false,
        user
      }
    })
  })
})
