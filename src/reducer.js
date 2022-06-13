import { combineReducers } from 'redux'
import doctorsReducer from './doctorsSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  doctors: doctorsReducer,

})

export default rootReducer