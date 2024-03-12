import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ListType = {
  pressed: boolean;
};

const initialState: ListType = {
  pressed: false,
};

export const isPressedSlider = createSlice({
  name: 'isPressed',
  initialState,
  reducers: {
    setPressed: (state, action: PayloadAction<boolean>) => {
      state.pressed = action.payload;
    },
  },
});

export const { setPressed } = isPressedSlider.actions;

export default isPressedSlider.reducer;
