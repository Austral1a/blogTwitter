import {combineReducers} from 'redux'
import getUsersReducer from './getUsersReducer'
import getAllPostsReducer from './getAllPostsReducer'
import getUserPostsReducer from './getUserPostsReducer'
import getCurrUserIdReducer from './getCurrUserIdReducer'

export const rootReducer = combineReducers({
    getUsersReducer,
    getAllPostsReducer,
    getUserPostsReducer,
    getCurrUserIdReducer
})
