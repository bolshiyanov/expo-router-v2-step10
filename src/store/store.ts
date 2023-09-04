import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducers/ThemeSlice";
import langSlice from "./reducers/LangSlice";

const rootReducer = combineReducers({
  themeSlice,
  langSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
