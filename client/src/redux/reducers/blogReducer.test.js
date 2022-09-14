import blogReducer, { createBlog, removeBlog } from './blogsReducer.js'
import deepFreeze from 'deep-freeze'

describe('blogReducer', () => {

  test('Returns new state with new blog', () => {
    const state = []
    const data =  {
      title: 'the app state is in redux store',
      author: 'Lautaro Ayosa',
      url: 'https://lautaroayosa.com.ar/this-new-blog',
    }

    deepFreeze(state)
    const newState = blogReducer(state, createBlog(data))

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(data)
  })

  // test('Returns a new state without a deleted blog', () => {
  //   // add a new blog
    
  //   const blogToDelete = {
  //     title: 'Second blog of the State',
  //     author: 'Lautaro Ayosa',
  //     url: 'https://lautaroayosa.com.ar/this-new-blog',
  //   }

  //   deepFreeze(state)

  //   // delete that blog
  //   const newState = blogReducer(state, removeBlog(blogToDelete))
  //   expect(newState).toHaveLength(2)
  //   expect(newState).not.toContainEqual(blogToDelete)
  // })
})