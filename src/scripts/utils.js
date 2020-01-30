export const isInViewport = elem => {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

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
