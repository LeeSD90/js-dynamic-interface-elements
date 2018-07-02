import './styles/style.css';

import dropDown from './dropDown';
import mobileMenu from './mobilemenu';
import slideShow from './slideshow';

document.addEventListener('DOMContentLoaded', () => {
  dropDown();
  mobileMenu();
  slideShow();
});