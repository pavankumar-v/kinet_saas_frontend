import { configureStore } from '@reduxjs/toolkit';
import exampleReduce from '@/features/example/exampleSlice';

// const middlewareConfiguration = { serializableCheck: false };

export default configureStore({
  reducer: { exampleReduce },
  devTools: {
    name: 'kinet saas',
  },
});

// reference https://dev.to/raaynaldo/redux-toolkit-setup-tutorial-5fjf
