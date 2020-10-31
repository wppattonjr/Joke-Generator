const jokeCard = (jokeObject) => {
  $('#app').html(`<div class="card m-2" style="width: 18rem;" id="${jokeObject.id}">
  <div class="card-body">
    <button type="button" id="${jokeObject.id}" class="btn btn-secondary joke">Joke</button>
    <button type="button" id="${jokeObject.id}" class="btn btn-success punchline">Punchline</button>
  </div>`);

  $('body').on('click', '.joke', '.punchline', (e) => {
    e.stopImmediatePropagation();
    $(`.card#${jokeObject.id}`);
  });
};

export default { jokeCard };
