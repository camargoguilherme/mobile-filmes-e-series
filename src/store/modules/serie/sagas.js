import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {
  getSeriesSuccess,
  getSeriesFailure,
  setSerieSuccess,
  setSerieFailure,
} from './actions';

export function* getSeries({payload}) {
  try {
    const {page, limit} = payload;
    const data = {
      params: {page, limit},
    };
    const response = yield call(api.get, 'series', data);
    yield put(getSeriesSuccess(response.data.series));
  } catch (err) {
    Alert.alert('Falha ao buscar', 'Houve um erro ao buscar as series');
    yield put(getSeriesFailure());
  }
}

export function setSerie({payload}) {
  try {
    const {serie} = payload;
    put(setSerieSuccess(serie));
  } catch (err) {
    Alert.alert('Falha ao buscar', 'Houve um erro ao buscar as series');
    put(setSerieFailure());
  }
}

export default all([
  takeLatest('@serie/GET_SERIES_REQUEST', getSeries),
  takeLatest('@serie/SET_SERIE_REQUEST', setSerie),
]);
