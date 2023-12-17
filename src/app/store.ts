import {
  configureStore,
  ThunkAction,
  Action,
  applyMiddleware,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todos/todoReducer";
import logger from "redux-logger";
import { modifyIdMiddleware } from "./middlewares/modifyIdMiddleware";
// const middleware1 = applyMiddleware(asyncFunctionMiddleware)
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(modifyIdMiddleware, logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
