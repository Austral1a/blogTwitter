import {combineReducers} from 'redux'
import getUsersReducer from './getUsersReducer'
import getAllPostsActionCreator from '../actions/getAllPosts'

export const rootReducer = combineReducers({
    getUsersReducer,
    getAllPostsActionCreator
})
