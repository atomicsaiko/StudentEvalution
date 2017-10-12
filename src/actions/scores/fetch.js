import API from '../../api'

export const FETCHED_SCORES = 'FETCHED_SCORES'

const api = new API()

export default () => {
  return (dispatch) => {
    console.log("Connecting to Scores service")
    const backend = api.service('classes')

    backend.find()
    .then((result) => {
      console.log(result)
      // debugger
      dispatch({
        type: FETCHED_SCORES,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
