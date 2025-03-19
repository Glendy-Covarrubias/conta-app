// store/index.js
import { configureStore } from '@reduxjs/toolkit';

// Importa tus reducers aquí
import stepReducer from './stepSlice';

export const store = configureStore({
    reducer: {
        step: stepReducer, // Agrega tus reducers al store
    },
});