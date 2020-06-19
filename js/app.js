'use strict';
import { API } from './api.js';
import * as UI from './interfaz.js';

UI.formSearch.addEventListener('submit', (e) => {
  e.preventDefault();

  //get data from form
  const artist = document.querySelector('#artista').value,
    song = document.querySelector('#cancion').value;

  if (artist === '' || song === '') {
    //user leave fields empty, show error
    UI.divMsj.innerHTML = 'Error... all fields are required';
    UI.divMsj.classList.add('error');

    setTimeout(() => {
      UI.divMsj.innerHTML = '';
      UI.divMsj.classList.remove('error');
    }, 3000);
  } else {
    //form is completed, conect to api
    const api = new API(artist, song);
    api.getApi().then((data) => {
      if (data.response.lyrics) {
        //song exists
        const lyric = data.response.lyrics;
        UI.divResult.textContent = lyric;
      } else {
        //song doesn't exist
        UI.divMsj.innerHTML = "The song doesn't exist, try another search";
        UI.divMsj.classList.add('error');

        setTimeout(() => {
          UI.divMsj.innerHTML = '';
          UI.divMsj.classList.remove('error');
          UI.formSearch.reset();
        }, 3000);
      }
    });
  }
});
