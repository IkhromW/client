import { combineReducers } from 'redux'
import classReducer from './classReducer'
import userReducer from './userReducer'


const reducers = combineReducers({
    classReducer,
    userReducer
})

export default reducers