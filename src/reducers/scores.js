import { FETCHED_SCORES } from '../actions/scores/fetch'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_SCORES :
      return [...payload]

    default :
      return state
  }
}
