const open_btn = document.getElementById('open_btn');
const modal_container = document.getElementById('modal_container');
const close_btn = document.getElementById('close_btn');

open_btn.addEventListener('click', () => {
  modal_container.classList.add('is_open');
});

close_btn.addEventListener('click', () => {
  modal_container.classList.remove('is_open');
});

modal_container.addEventListener('click', event => {
  if (event.target === modal_container) {
    modal_container.classList.remove('is_open');
  }
});
