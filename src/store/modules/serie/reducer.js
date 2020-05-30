import produce from 'immer';

const INITIAL_STATE = {
  series: [],
  temporadas: [],
  show: {
    _id: '5eca7b3ffa9f381691924d62',
    conclude: true,
    title: 'Private Eyes',
    uriPage: 'https://www.bkseries.com/assistir-private-eyes/',
    posterStart:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/HsNFA4ZbjZkAnPtBYJAIORFhPP.jpg',
    category: 'Categorias: Crime, Drama, Séries',
    date: 'Lançamento: 2016',
    language: 'Áudio: Legendado',
    resume:
      'O jogador de hóquei Ex-pro Matt Shade modifica irrevogavelmente sua vida quando se junta com feroz P.I. Angie Everett para formar uma força de investigação improvável.',
  },
  loading: false,
};

export default function serie(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@serie/GET_SERIES_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@serie/GET_SERIES_SUCCESS': {
        draft.series = [...draft.series, ...action.payload.series];
        draft.loading = false;
        break;
      }

      case '@serie/GET_SERIES_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@serie/SET_SERIE_REQUEST': {
        draft.show = action.payload.serie;
        break;
      }

      case '@serie/SET_SERIE_FAILURE': {
        break;
      }

      case '@serie/GET_TEMPORADAS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@serie/GET_TEMPORADAS_SUCCESS': {
        draft.temporadas = action.payload.temporadas;
        draft.loading = false;
        break;
      }

      case '@serie/GET_TEMPORADAS_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
