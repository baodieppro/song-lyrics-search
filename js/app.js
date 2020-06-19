'use strict';

import * as UI from './interfaz.js';

UI.formSearch.addEventListener('submit', (e) => {
  e.preventDefault();

  //get data from form
  const artist = document.querySelector('#artista').value,
    song = document.querySelector('#cancion').value;

   if (artist === '' || song === ''){
       UI.divMsj.innerHTML = 'Error... all fields are required';
       UI.divMsj.classList.add('error');

       setTimeout(()=>{

        UI.divMsj.innerHTML='';
        UI.divMsj.classList.remove('error');
       }, 3000);
   }
});
