import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

import { reduxStorage } from './storage';
import authReducer from './modules/auth/slice';

const persistConfig: PersistConfig<ReturnType<typeof reducers>> = {
  key: 'root',
  version: 1,
  debug: __DEV__,
  storage: reduxStorage,
  whitelist: ['auth'],
  transforms: [createBlacklistFilter('auth', ['sessionStatus'])],
};

const reducers = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer<ReturnType<typeof reducers>>(
  persistConfig,
  reducers,
);

export const store = configureStore({
  devTools: __DEV__,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppRootState = () => RootState;

export type AppDispatch = typeof store.dispatch;
