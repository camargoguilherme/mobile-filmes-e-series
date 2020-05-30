export function getTemporadasSuccess(temporadas) {
  return {
    type: '@temporada/GET_TEMPORADAS_SUCCESS',
    payload: {temporadas},
  };
}

export function getTemporadasFailure() {
  return {
    type: '@temporada/GET_TEMPORADAS_FAILURE',
  };
}
