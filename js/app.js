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
      console.log(data);
    });
  }
});
