(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu-order]'),
    form: document.querySelector('.contacts-form'),
  };
  refs.form.addEventListener('submit', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal(event) {
    event.preventDefault();
    refs.modal.classList.toggle('is-hidden');
  }
})();