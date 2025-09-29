// Menu toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const header = item.querySelector('h3');
  header.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Buy Page Cart Logic
let cartCount = 0;
let cartTotal = 0;

const products = document.querySelectorAll('.product-card');
products.forEach(card => {
  const button = card.querySelector('button');
  const quantityInput = card.querySelector('.quantity');
  const priceText = card.querySelector('p').innerText;
  const price = parseFloat(priceText.replace('Price: $', ''));

  button.addEventListener('click', () => {
    const qty = parseInt(quantityInput.value);
    cartCount += qty;
    cartTotal += qty * price;

    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
  });
});
