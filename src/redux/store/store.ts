import { configureStore } from '@reduxjs/toolkit';

import isPressedSlider from '../action/isPressedSlider';
import { taskService } from '@/features/service/taskService';

export const store = configureStore({
  reducer: {
    isPressed: isPressedSlider,

    [taskService.reducerPath]: taskService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
