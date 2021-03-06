import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetappbrunohonorato',
      storage,
      whitelist: ['auth', 'user', 'meetup'],
    },
    reducers
  );

  return persistedReducer;
};
