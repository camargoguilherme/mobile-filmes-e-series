import produce from 'immer';

const INITIAL_STATE = {
  temporadas: [],
  show: {},
  loading: false,
};

export default function serie(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@temporada/GET_TEMPORADAS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@temporada/GET_TEMPORADAS_SUCCESS': {
        draft.temporadas = action.payload.temporadas;
        draft.loading = false;
        break;
      }

      case '@temporada/GET_TEMPORADAS_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
