import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type EmojiType = {
  emoji: string;
};

const initialState: EmojiType = {
  emoji: '🕳️',
};

export const setEmoji = createSlice({
  name: 'setEmoji',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<string>) => {
      state.emoji = action.payload;
    },
  },
});

export const { setItem } = setEmoji.actions;

export default setEmoji.reducer;
