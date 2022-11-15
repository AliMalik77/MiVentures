import AuthReducer from './reducers/AuthReducer';
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
