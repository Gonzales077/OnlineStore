document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cart = document.getElementById('cart');
    const cartClose = document.getElementById('cart-close');

    cartIcon.addEventListener('click', function() {
        cart.classList.toggle('open');
    });

    cartClose.addEventListener('click', function() {
        cart.classList.remove('open');
    });
});
