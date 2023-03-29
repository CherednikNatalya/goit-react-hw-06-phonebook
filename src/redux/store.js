import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

// const initState = {
//   counter: counterInitState,
//   users: userInitState,
//   posts: postsInitState,
// };

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  
});

  // const rootReducer = (state = initialState, action) => {
  //   return state;
  // };

