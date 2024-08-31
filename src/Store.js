// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './features/DashboardSlice';

const Store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export default Store;
