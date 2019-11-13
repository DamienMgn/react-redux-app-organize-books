import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import AuthReducer from './reducers/authReducer'


export default createStore(AuthReducer, applyMiddleware(thunk))
