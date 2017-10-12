import API from '../../api'

export const FETCHED_STUDENT_SCORES = 'FETCHED_STUDENT_SCORES'

const api = new API()

export default (studentId) => {
  return (dispatch) => {
    console.log("Connecting to Scores service")
    const backend = api.service('scores')

    backend.find({
      // query: {
      //   $sort: {
      //     createdAt: -1,
      //   },


    //     query: {
    //       $limit: 10,
    //       $sort: {
    //         createdAt: -1
    //       }
    //       student: ObjectId(studentId)},
    //
  })

    // find({student: ObjectId("59df3d2360eaa71d3ff27215")})
    .then((result) => {
      console.log(result)
      // debugger
      dispatch({
        type: FETCHED_STUDENT_SCORES,
        payload: result.data
      })
    })
    .catch((error) => {
      // error handling!
    })
  }
}
