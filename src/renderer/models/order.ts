const initState = {
  before: 0,
  after: 0,
};

export default {
  namespace: 'order',

  state: initState,

  effects: {},

  reducers: {
    setOrder(state, payload) {
      return {
        ...state,
        ...payload.values,
      };
    },
  },
};
