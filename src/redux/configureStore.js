import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';

import AuthReducer from './reducers/authReducer'
import BooksReducer from './reducers/booksReducer'

const reducer = combineReducers({auth: AuthReducer, books: BooksReducer})

const store = createStore(reducer, applyMiddleware(thunk))
export default store