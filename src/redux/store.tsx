import AuthReducer from "./reducers/AuthReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// const middlewares = getDefaultMiddleware({
//   // https://github.com/reduxjs/redux-toolkit/issues/415
//   immutableCheck: false,
// });

// if (__DEV__) {
//   const createDebugger = require("redux-flipper").default;
//   middlewares.push(createDebugger());
// }

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
