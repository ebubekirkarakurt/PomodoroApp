import { configureStore } from "@reduxjs/toolkit";

import isPressedSlider from "../action/isPressedSlider";
import { getTasks } from "@/features/service/getTask";

export const store = configureStore({
  reducer: {
    isPressed: isPressedSlider,

    [getTasks.reducerPath] : getTasks.reducer

  },
  middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware().concat(
      getTasks.middleware,
    )
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
