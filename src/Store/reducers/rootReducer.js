import {combineReducers} from 'redux'
import getUsersReducer from './getUsersReducer'
import getAllPostsReducer from './getAllPostsReducer'

export const rootReducer = combineReducers({
    getUsersReducer,
    getAllPostsReducer
})
