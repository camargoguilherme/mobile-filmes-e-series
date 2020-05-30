import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {getTemporadasSuccess, getTemporadasFailure} from './actions';

export function* getTemporadas({payload}) {
  try {
    const {serie} = payload;
    const data = {
      params: {serie: serie.title},
    };
    console.tron.log('payload', payload.serie);

    // const response = yield call(api.get, 'temporadas', data);
    // yield put(getTemporadasSuccess(response.data));
  } catch (err) {
    Alert.alert('Falha ao buscar', 'Houve um erro ao buscar as series');
    yield put(getTemporadasFailure());
  }
}

export default all([
  takeLatest('@serie/SET_SERIE_REQUEST', getTemporadas),
  takeLatest('@temporada/GET_TEMPORADAS_REQUEST', getTemporadas),
]);
