import axios from 'axios';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
      const thisJoke = response.data;
      resolve(thisJoke);
    })
    .catch((error) => reject(error));
});

const getPunchline = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
      const thisPunchline = response.data;
      resolve(thisPunchline);
    }).catch((error) => reject(error));
});

export default { getJoke, getPunchline };
