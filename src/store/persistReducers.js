// import storage from 'redux-persist/lib/';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'filmeseseries',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'serie'],
    },
    reducers
  );

  return persistedReducer;
};
