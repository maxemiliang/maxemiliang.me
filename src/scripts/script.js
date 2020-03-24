import register from './register-sw';
import { smoothScrollLinks } from './utils';

window.onload = () => {
  window.addEventListener('scroll', animateBG);
  window.addEventListener('resize', animateBG);
  window.addEventListener('scroll', arrowAnimate);
  document.querySelectorAll('.arrow.directionist').forEach(el => {
    el.classList.add('animate-arrow');
    setTimeout(() => {
      el.classList.remove('animate-arrow');
      el.classList.add('done-animating');
    }, 4300);
  });
  animateBG();
  arrowAnimate();
  setupClick();
  register();
  smoothScrollLinks();
};

const animateBG = () => {
  const element = document.querySelector('.animated-bg');
  const isTablet = window.matchMedia('(max-width: 900px)').matches;
  const isMobile = window.matchMedia('(max-width: 650px)').matches;
  const multiplier = isTablet ? (isMobile ? 0.19 : 0.15) : 0.1;
  const startwidth = isTablet ? (isMobile ? 36 : 20) : 15;
  if (window.scrollY > 200) {
    document.querySelector('body').classList.add('expanding');
    const size = window.scrollY * multiplier - startwidth;
    element.style.cssText = `width: ${size}%`;
  } else {
    document.querySelector('body').classList.remove('expanding');
    element.style.cssText = `width: 0%`;
  }
  const fillsViewport =
    Number.parseInt(document.querySelector('.animated-bg').style.width) >= 100;
  if (fillsViewport && isTablet)
    document.querySelector('body').classList.add('full-width');
  else document.querySelector('body').classList.remove('full-width');
};

const arrowAnimate = () => {
  if (window.scrollY > 0) {
    document.querySelectorAll('.arrow.directionist').forEach(el => {
      el.classList.add('up');
    });
  } else {
    document.querySelectorAll('.arrow.directionist').forEach(el => {
      el.classList.remove('up');
    });
  }
};

const setupClick = () => {
  const arrow = document.querySelectorAll('.arrow.directionist');
  arrow.forEach(ele => {
    ele.addEventListener('click', el => {
      if (!ele.classList.contains('up')) {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
};
