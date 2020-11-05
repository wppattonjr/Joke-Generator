import thisJoke from '../helpers/data/jokeData';

const showJoke = () => {
  $('#showTheJoke').on('click', () => {
    $('#show').html('');
    $('#punchline').html('');
    thisJoke.getJoke().then((response) => {
      console.warn(response);
      $('#show').html(`${response.setup}`);
      $('#showPunchline').on('click', () => {
        $('#punchline').html(`${response.punchline}`);
      });
    });
  });
};

export default { showJoke };
