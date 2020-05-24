export const state = () => ({
  results: [],
});

export const mutations = {
  addResults(state, payload) {
    state.results = payload;
  },
};
