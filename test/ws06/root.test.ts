/// <reference types="jest" />
import { getStore } from '@ws06/root'
import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from '@ws06/user/actions'

const context = describe

describe('redux', () => {
  it('flows', () => {
    const store = getStore()

    expect(store.getState()).toEqual({})

    store.dispatch({
      type: CREATE_USER_REQUEST,
      payload: 'user-id'
    })

    expect(store.getState()).toEqual({
      loading: true
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
      loading: false,
      user
    })
  })
})
