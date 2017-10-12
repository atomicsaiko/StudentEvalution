import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()

export default (student) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })
    debugger
    const backend = api.service('students')

    // api.authenticate()
    //   .then(() => {
        console.log("Before create. Value of student: ", student)
        backend.create(student)
          .then(() => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })
          })
          .catch((error) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      // })
      // .catch((error) => {
      //   dispatch({ type: APP_DONE_LOADING })
      //   dispatch({
      //     type: LOAD_ERROR,
      //     payload: error.message
      //   })
      // })
  }
}
