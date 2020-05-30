export function getSeriesRequest(page, limit) {
  return {
    type: '@serie/GET_SERIES_REQUEST',
    payload: {page, limit},
  };
}

export function getSeriesSuccess(series) {
  return {
    type: '@serie/GET_SERIES_SUCCESS',
    payload: {series},
  };
}

export function getSeriesFailure() {
  return {
    type: '@serie/GET_SERIES_FAILURE',
  };
}

export function setSerieRequest(serie) {
  return {
    type: '@serie/SET_SERIE_REQUEST',
    payload: {serie},
  };
}

export function setSerieSuccess(serie) {
  return {
    type: '@serie/SET_SERIE_SUCCESS',
    payload: {serie},
  };
}

export function setSerieFailure() {
  return {
    type: '@serie/SET_SERIE_FAILURE',
  };
}
