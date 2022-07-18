export const state = {
  scores: [],
};

export const addScore = (score) => {
  state.scores.push(score);
};
