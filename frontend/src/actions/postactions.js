import axios from "axios";
import { POST_DELETE_FAIL,
    POST_DELETE_REQUEST, 
    POST_DELETE_SUCCESS, 
    POST_DETAILS_FAIL, 
    POST_DETAILS_REQUEST, 
    POST_DETAILS_SUCCESS, 
    POST_LIST_FAIL, 
    POST_LIST_REQUEST, 
    POST_LIST_SUCCESS,
    POST_SAVE_FAIL,
    POST_SAVE_REQUEST,
    POST_SAVE_SUCCESS
} from "../constants/postconstants"

const listPosts = () => async (dispatch) => {
    try {
        dispatch({type: POST_LIST_REQUEST });
        const { data } = await axios.get("/api/urunler");
        dispatch({ type: POST_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: POST_LIST_FAIL, payload: error.message });
    }
}
//append kısmını POSTscreen içinde hallet
const savePost = (post) => async (dispatch) => {//dispatch yanına getState
    const fd = new FormData();
    fd.append('id', post.id)
    fd.append('image', post.image);
    fd.append('name', post.name);
    fd.append('description', post.description);
    
    console.log(post)
    console.log(post.image)
    console.log(post._id)
    try {
        dispatch({type: POST_SAVE_REQUEST, payload: fd});
       // const {userSignin: {userInfo}} = getState();
       if(!fd._id) {
        const {data} = await axios.post("/api/admin/urunler875548674/", fd, {
            headers: {
            // 'Authorization': 'Bearer ' + userInfo.token
            "Content-Type": "multipart/form-data"
         }
     });
     dispatch({ type: POST_SAVE_SUCCESS, payload: data});
       } else {
        const {data} = await axios.put("/api/admin/urunler875548674/" + fd._id,
         fd, {headers:{
            // Authorization: 'Bearer ' + userInfo.token
            "Content-Type": "multipart/form-data"

         }
     });
          dispatch({ type: POST_SAVE_SUCCESS, payload: data});
       }

    } catch (error) {
        dispatch({ type: POST_SAVE_FAIL, payload: error.message});

    }
}

const detailsPost = (postId) => async (dispatch) => {
    try {
        dispatch({type: POST_DETAILS_REQUEST, payload: postId});
        const {data} = await axios.get("/api/urunler/" + postId);
        dispatch({type: POST_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: POST_DETAILS_FAIL, payload: error.message})
    }
}

const deletePost = (postId) => async (dispatch) => {
    try {
        dispatch({type: POST_DELETE_REQUEST, payload: postId});
        const {data} = await axios.delete("/api/admin/urunler875548674/" + postId, {
            headers: {
                //Authorization: 'Bearer' + userInfo.token
            }
        });
        dispatch({type: POST_DELETE_SUCCESS, payload: data, success: true});
    } catch (error) {
        dispatch({type: POST_DELETE_FAIL, payload: error.message})
    }
}


export { listPosts, detailsPost, savePost, deletePost};