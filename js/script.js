'use strict';

function checkForm(el) {
  // const name = el.name.value;
  console.log(name);
  console.log(el);
  
  return false;
}

const form = document.querySelector('#form');
// form.addEventListener('submit', e => {
//   e.preventDefault();
// })
// form.addEventListener('submit', checkForm, form);
form.addEventListener('submit', e => {
  e.preventDefault();
  checkForm(e.target);
  checkForm(e);
});