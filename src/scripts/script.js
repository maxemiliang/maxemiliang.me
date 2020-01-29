window.onload = () => {
  window.addEventListener('scroll', animateBG);
  animateBG();
  setupClick();
};

const animateBG = () => {
  document.querySelector(
    '.animated-bg'
  ).style.cssText = `width: ${window.scrollY * 0.09}%`;
};

const setupClick = () => {
  document.querySelector('.hero .arrow').addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  });
};
