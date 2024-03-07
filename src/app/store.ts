import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import channelReducer from "../features/channelSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    channelState: channelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
