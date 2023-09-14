import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log(1111111, '我发生变化啦', state.value);
    }
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;