import { POST_DETAILS_FAIL,
         POST_DETAILS_REQUEST,
         POST_DETAILS_SUCCESS,
         POST_LIST_FAIL,
         POST_LIST_REQUEST,
         POST_LIST_SUCCESS,
         POST_SAVE_SUCCESS,
         POST_SAVE_REQUEST,
         POST_SAVE_FAIL,        
         POST_DELETE_REQUEST,
         POST_DELETE_SUCCESS,
         POST_DELETE_FAIL
        } from "../constants/postconstants";

function postListReducer(state = { posts: [] }, action ){

    switch (action.type){
        case POST_LIST_REQUEST:
            return { loading: true, posts: [] };
        case POST_LIST_SUCCESS:
            return { loading: false, posts: action.payload };
        case POST_LIST_FAIL:
            return { loading: false, error: action.payload};
        default: 
        return state;
    }
}

function postDetailsReducer(state = { post: {} }, action ){

    switch (action.type){
        case POST_DETAILS_REQUEST:
            return { loading: true };
        case POST_DETAILS_SUCCESS:
            return { loading: false, post: action.payload };
        case POST_DETAILS_FAIL:
            return { loading: false, error: action.payload};
        default: 
        return state;
    }
}

function postSaveReducer(state = { post: {} }, action ){

    switch (action.type){
        case POST_SAVE_REQUEST:
            return { loading: true };
        case POST_SAVE_SUCCESS:
            return { loading: false, success: true,  post: action.payload };
        case POST_SAVE_FAIL:
            return { loading: false, error: action.payload};
        default: 
        return state;
    }
}

function postDeleteReducer(state = { post: {} }, action ){

    switch (action.type){
        case POST_DELETE_REQUEST:
            return { loading: true };
        case POST_DELETE_SUCCESS:
            return { loading: false, post: action.payload, success: true   };
        case POST_DELETE_FAIL:
            return { loading: false, error: action.payload};
        default: 
        return state;
    }
}

export { postListReducer, postDetailsReducer, postSaveReducer, postDeleteReducer};