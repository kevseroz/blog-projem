import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { postDetailsReducer, postListReducer, postSaveReducer, postDeleteReducer } from './reducers/postreducers';
import userreducer from './reducers/userreducer'
import  thunk  from 'redux-thunk';

const initialState = {};
const reducer = combineReducers({
    postList: postListReducer,
    postDetails: postDetailsReducer,
    userSignup: userreducer,
    userSignin: userreducer,
    postSave: postSaveReducer,
    postDelete: postDeleteReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;