export const smoothScrollLinks = () => {
  const links = document.querySelectorAll('[data-href]');
  links.forEach(el => {
    el.addEventListener('click', () => {
      const target = document.querySelector(el.getAttribute('data-href'));
      if (target)
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
    });
  });
};
