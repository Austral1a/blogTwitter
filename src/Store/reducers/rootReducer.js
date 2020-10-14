import {combineReducers} from 'redux'
import getUsersReducer from './getUsersReducer'
import getAllPostsReducer from './getAllPostsReducer'
import getUserPostsReducer from './getUserPostsReducer'
import getCurrUserIdReducer from './getCurrUserIdReducer'
import getPostCommentsReducer from './getPostCommentsReducer'
<<<<<<< HEAD
import updPostReducer from './updPostReducer'
=======
import isUserSignedInReducer from './isUserSignedInReducer'
>>>>>>> master

export const rootReducer = combineReducers({
    getUsersReducer,
    getAllPostsReducer,
    getUserPostsReducer,
    getCurrUserIdReducer,
    getPostCommentsReducer,
<<<<<<< HEAD
    updPostReducer
=======
    isUserSignedInReducer
>>>>>>> master
})
