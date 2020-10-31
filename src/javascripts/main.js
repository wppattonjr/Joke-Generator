import 'bootstrap';
import '../styles/main.scss';
import jokeCard from './cards/jokeCard';
import jokeData from './helpers/data/jokeData';

const init = () => {
  jokeCard.jokeCard(jokeData);
};

init();
