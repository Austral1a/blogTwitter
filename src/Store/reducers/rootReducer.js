import {combineReducers} from 'redux'
import getUsersReducer from './getUsersReducer'
import getAllPostsReducer from './getAllPostsReducer'
import getUserPostsReducer from './getUserPostsReducer'
import getCurrUserIdReducer from './getCurrUserIdReducer'
import getPostCommentsReducer from './getPostCommentsReducer'
import updPostReducer from './updPostReducer'
import isUserSignedInReducer from './isUserSignedInReducer'
import createUserReducer from "./createUserReducer";
import delPostReducer from './delPostReducer'
import createPostReducer from './createPostReducer'

export const rootReducer = combineReducers({
    getUsersReducer,
    createUserReducer,
    getAllPostsReducer,
    getUserPostsReducer,
    getCurrUserIdReducer,
    getPostCommentsReducer,
    updPostReducer,
    isUserSignedInReducer,
    delPostReducer,
    createPostReducer
})
