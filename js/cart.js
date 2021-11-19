/*jshint esversion: 6 */
const cart = () => {
  const cartBtn = document.querySelector('.button-cart');
  const cart = document.getElementById('modal-cart');
  const closeBTN = cart.querySelector('.modal-close');

  cartBtn.addEventListener('click', () => {
    cart.style.display = 'flex';
  });

  closeBTN.addEventListener('click', () => {
    cart.style.display = '';
  });
};

cart();