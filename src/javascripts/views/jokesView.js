import jokeData from '../helpers/data/jokeData';
import card from '../cards/jokeCard';

const showTheJoke = () => {
  jokeData.getJoke().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.jokeCard(item));
      });
    } else {
      $('#app').append('<h1>NO JOKES!</h1>');
    }
  });
};

const showThePunchline = () => {
  jokeData.getPunchline().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.jokeCard(item));
      });
    } else {
      $('#app').append('<h1>NO PUNCHLINE!</h1>');
    }
  });
};

export default { showTheJoke, showThePunchline };
