import API from '../../api'

export const FETCHED_CLASSES = 'FETCHED_CLASSES'

const api = new API()

export default () => {
  return (dispatch) => {
    console.log("Connecting to Classes service")
    const backend = api.service('classes')

    backend.find()
    .then((result) => {
      console.log(result)
      // debugger
      dispatch({
        type: FETCHED_CLASSES,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
