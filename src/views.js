const scoresEl = document.querySelector('.scores');

export const renderScores = (scores) => {
  scoresEl.innerHTML = '';
  scores.forEach((score) => {
    const markup = `<li class="score">${score.name}: ${score.score}</li>`;
    scoresEl.insertAdjacentHTML('beforeend', markup);
  });
};
