import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../components/features/car/carslice' ; 

export const store = configureStore({
  reducer: {
    car: carReducer 
  },
});
