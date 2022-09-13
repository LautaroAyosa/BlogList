import noteReducer from './blogReducer'
import deepFreeze from 'deep-freeze'

describe('blogReducer', () => {
  test('returns new state with action NEW_BLOG', () => {
    const state = []
    const action = {
      type: 'NEW_BLOG',
      data: {
        title: 'the app state is in redux store',
        author: 'Lautaro Ayosa',
        url: 'https://lautaroayosa.com.ar/this-new-blog',
      }
    }

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })
})