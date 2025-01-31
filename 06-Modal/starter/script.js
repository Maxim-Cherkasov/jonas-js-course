'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); // no dot in class
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); // we don't use () in the func here
overlay.addEventListener('click', closeModal);

/* 
    When the event occures, JS will call the func with (e) (event object) as an argument. It works because we do not call this func ourselves. We only define it here.
    (e) is an oject generated by JS. As in any object, here in e object we can see which key was pressed by e.key.
  */
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // here we call the func
  }
});
