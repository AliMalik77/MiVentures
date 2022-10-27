import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  IS_LOADING,
  TYPE_ERROR,
  TYPE_SUCCESS,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
} from "../types/AuthType";

export const login = () => {
  return (dispatch: any) => {
    try {
      dispatch({ type: IS_LOADING });
      dispatch({ type: LOGIN_SUCCESS });
    } catch (err) {
      dispatch({ type: LOGIN_ERROR, err });
    }
  };
};

export const searchType = (data: string) => {
  return (dispatch: any) => {
    try {
      dispatch({ type: IS_LOADING });
      dispatch({ type: TYPE_SUCCESS, data });
    } catch (err) {
      dispatch({ type: TYPE_ERROR, err });
    }
  };
};

export const setSearchQuery = (data: string | null) => {
  return (dispatch: any) => {
    try {
      dispatch({ type: IS_LOADING });
      dispatch({ type: SEARCH_SUCCESS, data });
    } catch (err) {
      dispatch({ type: SEARCH_ERROR, err });
    }
  };
};

// export const getUserData = async (user: null | string) => {
//   console.log("user to be searchhed is ", user);
// };
