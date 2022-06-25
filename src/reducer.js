import { combineReducers } from 'redux'
import doctorsReducer from './doctorsSlice'

const rootReducer = combineReducers({
  doctors: doctorsReducer,
})

export default rootReducer