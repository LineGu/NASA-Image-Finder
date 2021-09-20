export const initState = {
  loading: false,
  progress: 0,
  data: null,
  preData: null,
  error: null,
  page: null,
  searchText: null,
  isUpdated: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return {
        loading: false,
        progress: 0,
        data: null,
        error: null,
        page: 1,
        searchText: action.searchText,
        isUpdated: false,
      };

    case 'LOADING':
      return {
        loading: true,
        progress: 20,
        data: state.data,
        error: null,
        page: state.page,
        searchText: state.searchText,
        isUpdated: state.isUpdated,
      };

    case 'PROGRESS':
      return {
        loading: true,
        progress: action.progress,
        data: state.data,
        error: null,
        page: state.page,
        searchText: state.searchText,
        isUpdated: state.isUpdated,
      };
    case 'SUCCESS':
      return {
        loading: false,
        progress: 0,
        data: action.data,
        error: null,
        page: action.page,
        searchText: action.searchText,
        isUpdated: action.isUpdated,
      };
    case 'ERROR':
      return {
        loading: false,
        progress: 0,
        data: state.data,
        error: action.error,
        page: null,
        searchText: null,
        isUpdated: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const createDispatcher = (dispatch) => {
  return {
    reset(inputText) {
      dispatch({ type: 'RESET', searchText: inputText });
    },

    progress(progress) {
      dispatch({ type: 'PROGRESS', progress });
    },

    loading() {
      dispatch({ type: 'LOADING' });
    },

    success(data, page, isUpdated, searchText) {
      dispatch({ type: 'SUCCESS', data, page, isUpdated, searchText });
    },

    error(error) {
      dispatch({ type: 'ERROR', error });
    },
  };
};
