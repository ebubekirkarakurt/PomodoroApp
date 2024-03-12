import { configureStore } from '@reduxjs/toolkit';

import isPressedSlider from '../action/isPressedSlider';
import { taskService } from '@/features/service/taskService';
import setEmoji from '../action/setEmoji';

export const store = configureStore({
  reducer: {
    isPressed: isPressedSlider,
    setEmoji: setEmoji,

    [taskService.reducerPath]: taskService.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
