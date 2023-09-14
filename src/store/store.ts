import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './web';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

export default store;
