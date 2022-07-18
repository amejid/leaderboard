import { addScore, state } from './crud';
import './style.css';
import renderScores from './views';

const formAddEl = document.querySelector('.form-add');
const { nameEl, scoreEl } = formAddEl.elements;

const formAddHandler = (event) => {
  event.preventDefault();
  if (!nameEl.value || !scoreEl.value) return;
  addScore({ name: nameEl.value, score: +scoreEl.value });
  nameEl.value = '';
  scoreEl.value = '';
  renderScores(state.scores);
};

formAddEl.addEventListener('submit', formAddHandler);
