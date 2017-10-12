import { FETCHED_STUDENT_SCORES } from '../actions/scores/fetchStudentScores'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENT_SCORES :
      return [...payload]

    default :
      return state
  }
}
