import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import taskSlice from './slice';

const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
