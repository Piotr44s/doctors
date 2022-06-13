
const initialState = []

export default function doctorsReducer(state = initialState, action) {
  switch (action.type) {
    case 'doctors/added': {
      return [...state, action.payload]
    }


    default:
      return state
  }
}



