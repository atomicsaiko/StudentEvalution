import { FETCHED_STUDENT } from '../actions/students/fetchSingleStudent'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENT :
      return [...payload]

    default :
      return state
  }
}
