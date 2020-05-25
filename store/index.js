export const state = () => ({
  results: [],
});

export const getters = {
  getUri: (state) => (payload) => {
    const result = state.results.find((el) => el.uuid === payload);
    return result.id;
  },
};

export const mutations = {
  addResults(state, payload) {
    state.results = payload;
  },
};
