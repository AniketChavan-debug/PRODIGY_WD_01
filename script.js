document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');

  const onScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll);

  // Optional: immediate check if page loads scrolled
  onScroll();
});
