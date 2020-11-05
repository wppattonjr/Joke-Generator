import axios from 'axios';

const baseUrl = 'https://official-joke-api.appspot.com/random_joke';

const getJoke = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}`)
    .then((response) => {
      const thisJoke = response.data;
      resolve(thisJoke);
    })
    .catch((error) => reject(error));
});

export default { getJoke };
