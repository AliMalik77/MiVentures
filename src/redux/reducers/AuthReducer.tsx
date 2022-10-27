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

const initialState = {
  signedIn: false,
  isLoading: false,
  authError: null,
  type: null,
  typeError: null,
  search: null,
  searchError: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.error.message,
        isLoading: false,
      };
    case TYPE_SUCCESS:
      return {
        ...state,
        type: action.data,
        isLoading: false,
      };
    case TYPE_ERROR:
      return {
        ...state,
        isLoading: false,
        typeError: action,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        search: action.data,
        isLoading: false,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        searchError: action,
      };

    default:
      return state;
  }
};

export default authReducer;
