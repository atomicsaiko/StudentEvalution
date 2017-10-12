import API from '../../api'

export const FETCHED_STUDENT = 'FETCHED_STUDENT'

const api = new API()

export default (studentId) => {
  return (dispatch) => {
    console.log("Connecting to Students service")
    const backend = api.service('students')

    backend.get(studentId)
    .then((result) => {
      console.log(result)
      // debugger
      dispatch({
        type: FETCHED_STUDENT,
        payload: result // unknown why .data is not needed!
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
