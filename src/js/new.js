const MODAL_ACTIVE_CLASS_NAME = 'active';
const thankModal = document.querySelector('.modal-thank-you');
const form = document.querySelector('.contacts-form');
const backdrop = document.querySelector('.overlay');
const closeBtns = document.querySelectorAll('.close-btn');
const input = document.querySelector('.contacts-email-input');
console.log('first');
const openSuccessModal = () => {
  thankModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
  backdrop.classList.add(MODAL_ACTIVE_CLASS_NAME);
  console.log('first');
};
const closeSuccessModal = () => {
  thankModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  backdrop.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  input.value = '';
};
closeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    closeSuccessModal();
  });
});
form.addEventListener('submit', e => {
  console.log(thankModal, form, backdrop, closeBtns, input);
  e.preventDefault();
  setTimeout(openSuccessModal, 300);
  setTimeout(closeSuccessModal, 2400);
});
