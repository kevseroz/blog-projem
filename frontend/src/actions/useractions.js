import { apiCall, setTokenHeader } from "../services/api";
import { SET_CURRENT_USER } from "../constants/userconstants";
import { addError, removeError } from "../actions/erroractions";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logout() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function signup(email, username, password) {
  const userData ={email, username, password}
  return dispatch => {                                                                
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/signup48235`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve(); // indicate that the API call succeeded
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject(); // indicate the API call failed
        });
    });
  };
}

export function signin(email, password) {
  const userData ={email, password}
  return dispatch => {                                                                
    // wrap our thunk in a promise so we can wait for the API call
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/signin48235`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve(); // indicate that the API call succeeded
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject(); // indicate the API call failed
        });
    });
  };
}